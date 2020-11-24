// import http from '../utils/http'
import request from '../utils/requst'
import qs from 'querystring'
// 获取注册验证码
export function getRegisteredCode(data) {
    return request({
        url: '/v1/messages/phone/captcha',
        method: 'post',
        data: qs.stringify(data)
    })
}
//  提交注册信息
export function registered(data) {
    return request({
        url: '/v1/user/create',
        method: 'post',
        data: qs.stringify(data)
    })
}