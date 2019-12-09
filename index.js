import uv from './src/uv'
import pv from './src/pv'
import {ax} from './src/utils/http.js'
import getHideAjax from './src/utils/hideAjax.js'
import performance from './src/performance'
import errorTell from './src/error'
import recordHttp from './src/recordhttp'

//封装后的请求
window.$ax = ax


export default function f(name, isVue = false,url) {
    window.$hideAjax = getHideAjax(url);
    //错误监控
    errorTell(name, isVue)
    //接口请求监控
    recordHttp(name)
    //初始化uv
    uv(name).then(function () {
        //进行pv监控
        pv(name)
        //进行性能监控的api
        if (window.performance) {
            let perf = window.performance;
            //性能数据的获取
            performance(perf, name)
        }
    })
}
