import axios from 'axios'
import { Toast } from 'vant'
import { setLocal } from './utils'
import router from '../router'
// mall.sanxiancheng.com
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '//mall.sanxiancheng.com'
axios.defaults.withCredentials = true

axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务异常！')
    return Promise.reject(res)
  }
  console.log(res)
  if (res.data.code !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.code === 915 || res.data.code === 444) {

      router.push({ path: '/login' })
    }
    if (res.data.data && window.location.hash == '/login') {
      setLocal('username', res.data.data.username)
    }
    console.log("这里")
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
