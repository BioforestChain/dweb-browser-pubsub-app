import { R as Router } from '../router-69104b45.js'
const app = new Router()
app.use(async (event) => {
  console.log('api server:=>', event.request.url, event.ipcRequest.ipc.remote)
})
console.log('api init backend')
export { app as default }
