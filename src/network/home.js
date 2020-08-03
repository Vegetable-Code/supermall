import { request } from './request'

//请求多个数据
export function getHomeMulitData() {
  return request({
    url: '/home/multidata'
  })
}
