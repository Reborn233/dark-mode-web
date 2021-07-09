
import http from './http'
import * as RES from '../webapi.d'

const PREFIX = '/'
class Api {
  constructor() {
  }
  error() {
    alert('请求出错,请检查网络!')
  }
  async query() {
    const url = PREFIX + 'list.json'
    const res = await http.get<RES.webapi.response.TList>(url)
    return res.data
  }
}
export default Api
