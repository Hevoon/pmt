import _a from './a'
import _hash from './hash'
import _history from './history'

export default function (name) {
    let oldURL = window.location.href
    $hideAjax("/pv", "POST", {orgUrl: oldURL, targetUrl: 'homePage', name: name})
    //对a标签的监听
    _a(oldURL, name)
    //对hash的监听
    _hash(name)
    //对history.push和replace监听
    _history(oldURL, name)
}