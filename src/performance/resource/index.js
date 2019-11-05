export default function (perf) {
    perf.getEntries().forEach(e => {
        if (e.initiatorType === 'script' || e.initiatorType === 'link' || e.initiatorType === 'img') {
            let data = {
                url: e.name,
                initiatorType: e.initiatorType,
                duration: e.duration
            }
            $hideAjax('http://localhost:3010/resourcemonitor', 'POST', data)
        }
    })
}