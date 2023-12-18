import { R as Router } from '../router-69104b45.js'
const id = 'pubsubmodule.bagen.com.dweb'
const name = 'pubsubmodule'
const short_name = 'pubsub'
const description =
  'This is a sample application that includes instances of all dweb_plugins components.'
const logo =
  'data:image/png;base64,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'
const images = [
  'http://qiniu-waterbang.waterbang.top/bfm/cot-home_2058.webp',
  'http://qiniu-waterbang.waterbang.top/bfm/defi.png',
  'http://qiniu-waterbang.waterbang.top/bfm/nft.png',
]
const author = ['bfs', 'bfs@bfs.com']
const version = '1.0.0'
const change_log =
  'Added a new feature of shooting bubbles with a single click!'
const home = 'https://dweb.waterbang.top'
const categories = ['application']
const manifest = {
  id,
  name,
  short_name,
  description,
  logo,
  images,
  author,
  version,
  change_log,
  home,
  categories,
}
new TextEncoder()
new TextDecoder()
var IPC_METHOD$1
;(function (IPC_METHOD2) {
  IPC_METHOD2['GET'] = 'GET'
  IPC_METHOD2['POST'] = 'POST'
  IPC_METHOD2['PUT'] = 'PUT'
  IPC_METHOD2['DELETE'] = 'DELETE'
  IPC_METHOD2['OPTIONS'] = 'OPTIONS'
  IPC_METHOD2['TRACE'] = 'TRACE'
  IPC_METHOD2['PATCH'] = 'PATCH'
  IPC_METHOD2['PURGE'] = 'PURGE'
  IPC_METHOD2['HEAD'] = 'HEAD'
})(IPC_METHOD$1 || (IPC_METHOD$1 = {}))
var IPC_MESSAGE_TYPE
;(function (IPC_MESSAGE_TYPE2) {
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['REQUEST'] = 0)] = 'REQUEST'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['RESPONSE'] = 1)] = 'RESPONSE'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['STREAM_DATA'] = 2)] = 'STREAM_DATA'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['STREAM_PULLING'] = 3)] =
    'STREAM_PULLING'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['STREAM_PAUSED'] = 4)] = 'STREAM_PAUSED'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['STREAM_END'] = 5)] = 'STREAM_END'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['STREAM_ABORT'] = 6)] = 'STREAM_ABORT'
  IPC_MESSAGE_TYPE2[(IPC_MESSAGE_TYPE2['EVENT'] = 7)] = 'EVENT'
})(IPC_MESSAGE_TYPE || (IPC_MESSAGE_TYPE = {}))
var IPC_DATA_ENCODING
;(function (IPC_DATA_ENCODING2) {
  IPC_DATA_ENCODING2[(IPC_DATA_ENCODING2['UTF8'] = 2)] = 'UTF8'
  IPC_DATA_ENCODING2[(IPC_DATA_ENCODING2['BASE64'] = 4)] = 'BASE64'
  IPC_DATA_ENCODING2[(IPC_DATA_ENCODING2['BINARY'] = 8)] = 'BINARY'
})(IPC_DATA_ENCODING || (IPC_DATA_ENCODING = {}))
var IPC_ROLE$1
;(function (IPC_ROLE2) {
  IPC_ROLE2['SERVER'] = 'server'
  IPC_ROLE2['CLIENT'] = 'client'
})(IPC_ROLE$1 || (IPC_ROLE$1 = {}))
const { jsProcess, http, ipc, core } = navigator.dweb
const {
  FetchError,
  IPC_METHOD,
  IPC_ROLE,
  Ipc,
  IpcBodySender,
  IpcEvent,
  //
  IpcHeaders,
  IpcRequest,
  IpcResponse,
  ReadableStreamIpc,
  ReadableStreamOut,
} = ipc
const app = new Router()
app.use(async (event) => {
  console.log('pubsub external:=>', event, event.ipcRequest)
  const appMMID = event.headers.get('X-Dweb-Host')
  const netMmid = 'netmodule.bagen.com.dweb'
  const netDomain = 'c.b.com'
  event.headers.append('X-Dweb-Pubsub', `${manifest.id}`)
  event.headers.append('X-Dweb-Pubsub-App', `${appMMID}`)
  event.headers.append('X-Dweb-Pubsub-Net', `${netMmid}`)
  event.headers.append('X-Dweb-Pubsub-Net-Domain', `${netDomain}`)
  const url = `http://external.${netMmid}:443${event.pathname}${event.search}`
  const resp = await jsProcess.nativeFetch(url, {
    method: event.method,
    // headers: event.headers,
    headers: void 0,
    // TODO 使用undefined是为了规避dweb browser的bug（修复后应使用event.headers)
    body: event.body,
  })
  console.log('pubsub resp: ', resp)
  return resp
})
jsProcess.onActivity(async (event, ipc2) => {
  let eventData
  try {
    eventData = JSON.parse(event.text)
  } catch (error) {
    console.error('event data invalid: ', event.text)
    return
  }
  const proxiedMMID = eventData.headers['X-Dweb-Pubsub-App']
  if (!proxiedMMID) {
    console.warn('missing X-Dweb-Pubsub-App field in headers: ', event.text)
    return
  }
  event.data
  const targetIpc = await jsProcess.connect(proxiedMMID)
  const ipcEvent = IpcEvent.fromText('activity', JSON.stringify(eventData.body))
  targetIpc.postMessage(ipcEvent)
  console.log('pubsub module event: ', event, ipc2)
})
export { app as default }
