import httpLog from '../httpLog'

export default function (temResponseText, event, temRecordElement, oldHXR) {
    if (!temRecordElement && temRecordElement.uploadStamp) {
        return
    }
    let responseText = ''
    try {
        responseText = temResponseText ? temResponseText : ''
    } catch (e) {
        responseText = ''
    }
    let url = temRecordElement.url
    let currentTime = temRecordElement.endTime
    let httpApi = event.detail.responseURL
    let status = event.detail.status
    let statusText = event.detail.statusText
    let loadTime = currentTime - temRecordElement.timeStart
    if (!httpApi) {
        return
    }
    let data = httpLog(url, httpApi, status, statusText, responseText, temRecordElement.timeStart, currentTime, loadTime)
    $hideAjax("http://localhost:3010/httpmonitor", "POST", data)
}