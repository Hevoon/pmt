export default function (perf, name) {
    perf.getEntries().forEach(e => {
        if (e.initiatorType === 'script' || e.initiatorType === 'link' || e.initiatorType === 'img') {
            let data = {
                url: e.name,
                initiatorType: e.initiatorType,
                duration: e.duration,
                name: name
            }
            $hideAjax('/resourcemonitor', 'POST', data)
        }
    })
}