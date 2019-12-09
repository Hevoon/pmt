export default function (name, isVue) {
    if (isVue) {
        // 只在 2.2.0+ 可用
        //渲染和观察期间未捕获错误的处理函数
        isVue.config.errorHandler = function (err, vm, info) {
            let message = err.stack.split('\n')[0].split(':')[1]
            let type = err.stack.split('\n')[0].split(':')[0]
            let place = err.stack.split('\n')[1].split('(')[0]
            let component = `${vm.$el.tagName}  ${vm.$el.id || vm.$el.className} `
            let data = {
                message: message,
                type: type,
                place: place,
                component: component,
                detailType: info,
                isVue: true,
                name: name
            }
            $hideAjax("/errormonitor", "POST", data)
        }
    } else {
        console.log('Vue is not found')
    }
    //promise未写catch而抛出的错误
    // window.addEventListener("unhandledrejection", function (e) {
    //     let message = e.reason
    //     let type = e.type
    //     let data = {
    //         message: message,
    //         type: type,
    //         isVue: false,
    //         name: name
    //     }
    //     $hideAjax("/errormonitor", "POST", data)
    // })
    //监控js的运行时错误
    window.onerror = function (message, source, lineno, colon, error) {
        let type = error.name
        let data = {
            message: message,
            type: type,
            place: source,
            lineno: lineno,
            colon: colon,
            isVue: false,
            name: name
        }
        $hideAjax("/errormonitor", "POST", data)
    }
}