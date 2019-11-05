export default function () {
    //进行hash变化的监控
    window.addEventListener('hashchange', function (event) {
        $hideAjax("http://localhost:3010/pv", "POST", {orgUrl: event.oldURL, targetUrl: event.newURL})
    })
}