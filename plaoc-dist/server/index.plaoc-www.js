import { R as Router } from '../router-69104b45.js'
const app = new Router()
app.use((event) => {
  console.log('www server:=>', event.request.url)
})
console.log('www init backend')
export { app as default }
