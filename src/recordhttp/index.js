import handleHttpResult from './handleHttpResult'

export default function (name) {
    //创建一个事件
    function ajaxTrigger(eventName) {
        let ajaxEvent = new CustomEvent(eventName, {detail: this})
        window.dispatchEvent(ajaxEvent)
    }

    //保存原始xhr对象
    let oldXHR = window.XMLHttpRequest

    //进行事件的创建与绑定
    function newXHR() {
        let orgXHR = new oldXHR()
        orgXHR.onloadstart = function () {
            ajaxTrigger.call(this, 'ajaxLoadStart')
        }
        orgXHR.onloadend = function () {
            ajaxTrigger.call(this, 'ajaxLoadEnd')
        }
        return orgXHR
    }

    //覆盖原XHR对象，new调用时返回添加了自定义事件的xhr实例
    window.XMLHttpRequest = newXHR
    let ajaxRecordArray = []
    //请求区分计数
    let count = 0
    window.addEventListener('ajaxLoadStart', function (e) {
        let timeStart = new Date().getTime()
        let temCount = count++
        e.detail.count = temCount
        let temRecord = {
            timeStart: timeStart,
            event: e,
            count: temCount,
            url: window.location.href.split('?')[0].replace('#', ''),
            uploadStamp: false
        }
        ajaxRecordArray.push(temRecord)
    })

    window.addEventListener('ajaxLoadEnd', function (e) {
        //触发事件时立马创建时间戳
        let endTime = new Date().getTime()
        for (let i = 0; i < ajaxRecordArray.length; i++) {
            //暂存一条记录信息
            let temRecordElement = ajaxRecordArray[i];
            if (temRecordElement.uploadStamp === true || temRecordElement.event.detail.status <= 0) continue;
            if (temRecordElement.count === e.detail.count) {
                //如果匹配，存入记录对象中
                temRecordElement.endTime = endTime
                let rType = (e.detail.responseType).toLowerCase()
                if (rType === "blob") {
                    (function () {
                        let reader = new FileReader();
                        reader.onload = function () {
                            let responseText = reader.result;//内容就在这里
                            handleHttpResult(responseText, e, temRecordElement, name);
                        }
                        try {
                            reader.readAsText(e.detail.response, 'utf-8');
                        } catch (e) {
                            handleHttpResult(e.detail.response, e, temRecordElement, name);
                        }
                    })();
                } else {
                    let responseText = e.detail.responseText
                    handleHttpResult(responseText, e, temRecordElement, name)
                }
            }
        }
    })
}