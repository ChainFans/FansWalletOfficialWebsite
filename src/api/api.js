import http from '../utils/http'
// import service from '../utils/requst'
import qs from 'querystring'
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
// let resquest = service.baseURL
// get请求
export function getListAPI(params) {
    return http.get(`/getList.json`, params)
}
// post请求
export function postFormAPI(params) {
    return http.post(`/postForm.json`, params)
}
// put 请求
export function putSomeAPI(params) {
    return http.put(`/putSome.json`, params)
}
// delete 请求
export function deleteListAPI(params) {
    return http.delete(`/deleteList.json`, params)
}