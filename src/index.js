import uv from './uv'
import _pv from './pv'
import {ax} from './utils/http.js'
import getHideAjax from './utils/hideAjax.js'
import performance from './performance'
import errorTell from './error'
import recordHttp from './recordHttp'

//封装后的请求
window.$ax = ax
window.$hideAjax = getHideAjax();

(function IIFE(name, isVue = false) {
    //初始化uv
    uv(name)
    //错误监控
    errorTell(isVue)
    //错误监控
    errorTell()
    //接口请求监控
    recordHttp()
    //进行pv监控
    _pv()
    //进行性能监控的api
    if (window.performance) {
        let perf = window.performance;
        //性能数据的获取
        performance(perf)
    }
})("gg")


//
// export default function (name) {
//     if (arguments[0]) {
//         //错误监控
//         errorTell(arguments[0])
//     } else {
//         //错误监控
//         errorTell()
//     }
//     //接口请求监控
//     recordHttp()
//     //初始化uv
//     uv(name)
//     //进行pv监控
//     _pv()
//     //进行性能监控的api
//     if (window.performance) {
//         let perf = window.performance;
//         //性能数据的获取
//         performance(perf)
//     }
// }
//

