export default function (oldURL, name) {
    let a = document.getElementsByTagName('a')
    Array.prototype.map.call(a, (e) => {
        e.addEventListener('click', function (event) {
            $hideAjax("/pv", "POST", {orgUrl: oldURL, targetUrl: event.target.href, name: name})
        })
    })
}