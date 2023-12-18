import { Router } from '@plaoc/server/middleware'
import { jsProcess, $MMID, IpcEvent } from '@dweb-browser/js-process'
import manifest from '../manifest.json'

const app = new Router()

const prefixpath = `/${manifest.id}`

app.use(async (event) => {
  console.log('api server:=>', event.request.url, event.ipcRequest.ipc.remote)

  const netMmid: $MMID = 'netmodule.bagen.com.dweb'
  // event.headers.append('X-Dweb-Pubsub', `${manifest.id}`)
  // event.headers.append('X-Dweb-Pubsub-App', `${manifest.id}`)
  // const url = `http://external.${netMmid}:443${event.pathname}${event.search}`
  // return await jsProcess.nativeFetch(url, {
  //   method: event.method,
  //   headers: event.headers,
  //   body: event.body,
  // })

  // const targetIpc = await jsProcess.connect(netMmid)
  // const ipcEvent = IpcEvent.fromText('activity', JSON.stringify({data: 'abc'}))
  // targetIpc.postMessage(ipcEvent)
})

console.log('api init backend')

export default app
