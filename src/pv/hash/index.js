export default function (name) {
    //进行hash变化的监控
    window.addEventListener('hashchange', function (event) {
        $hideAjax("/pv", "POST", {orgUrl: event.oldURL, targetUrl: event.newURL, name: name})
    })
}