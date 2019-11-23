export default function (oldURL, name) {
    let old = oldURL;
    //进行history.pushState的监控
    let wrapperHistory = function (type) {
        let org = history[type]
        return function () {
            let re = org.apply(this, arguments)
            let e = new Event(type)
            e.arguments = arguments
            window.dispatchEvent(e)
            return re
        }
    }
    //覆盖原方法
    history.pushState = wrapperHistory('pushState')
    history.replaceState = wrapperHistory('replaceState')
    //进行对push和replace事件的监听
    window.addEventListener('replaceState', function (e) {
        let _url = e.arguments.length - 1
        let newURL = e.arguments[_url]
        $hideAjax("http://localhost:3010/pv", "POST", {orgUrl: old, targetUrl: newURL, name: name})
        old = newURL
    })
    window.addEventListener('pushState', function (e) {
        let _url = e.arguments.length - 1
        let newURL = e.arguments[_url]
        $hideAjax("http://localhost:3010/pv", "POST", {orgUrl: old, targetUrl: newURL, name: name})
        old = newURL
    })
}