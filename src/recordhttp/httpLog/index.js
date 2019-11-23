export default function () {
    let wholeObj
    wholeObj = {
        url: arguments[0],
        httpApi: arguments[1],
        status: arguments[2],
        statusText: arguments[3],
        responseText: arguments[4],
        timeStart: arguments[5],
        currentTime: arguments[6],
        loadTime: arguments[7],
        name:arguments[8]
    }
    return wholeObj
}
