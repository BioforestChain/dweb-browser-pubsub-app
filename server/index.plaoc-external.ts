import { Router } from '@plaoc/server/middleware'
import {
  jsProcess,
  $MMID,
  IpcEvent,
  $IpcEvent,
  $Ipc,
  streamReadAllBuffer,
} from '@dweb-browser/js-process'
import manifest from '../manifest.json'

const app = new Router()

app.use(async (event) => {
  console.log('pubsub external:=>', event, event.ipcRequest)

  // TODO 发送者mmid应该从event.ipcRequest.ipc.remote拿，但remote是http.std.dweb，需要dweb-browser修复
  // 目前暂时从header: X-Dweb-Host取
  const appMMID = event.headers.get('X-Dweb-Host')

  // TODO 需要可配置
  const netMmid: $MMID = 'netmodule.bagen.com.dweb'
  const netDomain = 'c.b.com'

  event.headers.append('X-Dweb-Pubsub', `${manifest.id}`)
  event.headers.append('X-Dweb-Pubsub-App', `${appMMID}`)
  event.headers.append('X-Dweb-Pubsub-Net', `${netMmid}`)
  event.headers.append('X-Dweb-Pubsub-Net-Domain', `${netDomain}`)

  // console.log('pubsub req body2: ', (new TextDecoder().decode(await streamReadAllBuffer(event.body!))) )

  const url = `http://external.${netMmid}:443${event.pathname}${event.search}`
  const resp = await jsProcess.nativeFetch(url, {
    method: event.method,
    // headers: event.headers,
    headers: undefined, // TODO 使用undefined是为了规避dweb browser的bug（修复后应使用event.headers)
    body: event.body,
  })

  console.log('pubsub resp: ', resp)

  return resp
})

type EventData = {
  headers: {
    'X-Dweb-Host': string
    'X-Dweb-Pubsub-App'?: string
  }
  body: {
    topic: string
    data: string | Uint8Array
  }
}

// 监听其它模块发的IpcEvent
jsProcess.onActivity(async (event: $IpcEvent, ipc: $Ipc) => {
  // 通过ipc发送
  let eventData: EventData
  try {
    eventData = JSON.parse(event.text)
  } catch (error) {
    console.error('event data invalid: ', event.text)
    return
  }

  const proxiedMMID = eventData.headers['X-Dweb-Pubsub-App'] as $MMID
  if (!proxiedMMID) {
    console.warn('missing X-Dweb-Pubsub-App field in headers: ', event.text)
    return
  }

  event.data

  const targetIpc = await jsProcess.connect(proxiedMMID)
  // TODO 这里写activity是由于dweb_browser目前只有这个途径使用event，后续改进后这里应该使用topic
  const ipcEvent = IpcEvent.fromText('activity', JSON.stringify(eventData.body))
  targetIpc.postMessage(ipcEvent)

  console.log('pubsub module event: ', event, ipc)
})

export default app
