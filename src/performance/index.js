import resource from './resource'
import pageTarget from './PageTarget'

export default function (perf) {
    let timer = setInterval(function () {
        //防止获取的timing接口数据不全
        if (0 !== perf.timing.loadEventEnd) {
            clearInterval(timer)
            //兼容性判断
            if (perf.getEntries) {
                //进行各静态资源加载监控
                resource(perf)
            }
            //页面指标
            pageTarget(perf.timing)
            //perf.getEntries可以获取timing接口的数据，但是为了兼容性，选择还是使用timing接口
        }
    }, 0)
}