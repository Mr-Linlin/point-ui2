import axios from '../utils/axios'

export function login(params) {
  params['token'] = localStorage.getItem('token') || ''
  // params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/login', params);
}

export function showGs(params = {}) {
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/show', params);
}

export function showPoint() {
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/showPoint', params);
}

export function showPointLog() {
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/showPointLog', params);
}

export function showGsRate() {
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/showGsRate', params);
}

export function changeGs(amount) {
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  params['amount'] = amount || 0
  return axios.post('/Point/toGs', params);
}

export function getToken() {
  return axios.post('/Index/showToken');
}
export function logout() {
  return axios.post('/Point/logout',{
    token:localStorage.getItem('token')
  });
}


export function sumPoint() {
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  return axios.post('/Point/sumPoint',params)

}

// 获取详情数据
export function integralDetail(amount) {
  console.log(amount)
  let params = {}
  params['token'] = localStorage.getItem('token') || ''
  params['username'] = localStorage.getItem('username') || ''
  params['openId'] = localStorage.getItem('openId') || ''
  params['id'] = amount || 0
  console.log(params);
  return axios.post('/Point/showDetail', params);
}
