export default function (timing, name) {
    let data;
    data = {
        //白屏时间
        whiteScreen: timing.responseStart - timing.navigationStart,
        //页面加载时间
        pageLoad: timing.loadEventEnd - timing.navigationStart,
        //用户可操作时间
        // onReady: timing.domContentLoadedEventEnd - timing.navigationStart,
        //页面所有(静态)资源加载完成
        sourceLoad: timing.domComplete - timing.navigationStart,
        //dom树构建时间
        domTreeCons: timing.domInteractive - timing.domLoading,
        url: window.location.href,
        name: name
    }
    $hideAjax('http://localhost:3010/pagetarget', 'POST', data)
}