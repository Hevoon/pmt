import _a from './a'
import _hash from './hash'
import _history from './history'

export default function () {
    let oldURL = window.location.href
    $hideAjax("http://localhost:3010/pv", "POST", {orgUrl: oldURL, targetUrl: 'homePage'})
    //对a标签的监听
    _a(oldURL)
    //对hash的监听
    _hash()
    //对history.push和replace监听
    _history(oldURL)
}