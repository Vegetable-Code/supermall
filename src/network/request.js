import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/x6',
    timeout: 5000
  })

  // 2.拦截器
  // 2-1请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    /*
     * 1.信息不符合要求
     * 2.请求界面显示请求动画
     * 3.携带特殊信息
     */
    return config // 拦截一定要return出去
  }, err => {
    // console.log(err);
  })
  // 2-1响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    // console.log(err);
  })

  // 发送真正的网络请求
  return instance(config) // 本身就是一个Promise
}
