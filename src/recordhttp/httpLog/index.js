// export default function (TYPE) {
//     let wholeObj = {
//         url: arguments[1],
//         httpApi: arguments[2],
//         status: arguments[3],
//         statusText: arguments[4]
//     };
//     switch (TYPE) {
//         case "START" :
//             wholeObj.info = "发起请求"
//             wholeObj.timeStart = arguments[5]
//             break
//         case  "END":
//             wholeObj.info = "返回请求"
//             wholeObj.responseText = arguments[5]
//             wholeObj.currentTime = arguments[6]
//             wholeObj.loadTime = arguments[7]
//             break
//         default:
//             break
//     }
//     this.info = wholeObj
// }
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
        loadTime: arguments[7]
    }
    return wholeObj
}
// export default function () {
//     let wholeObj = []
//     console.log(arguments)
//     for (let i = 0; i < arguments.length; i++) {
//         wholeObj.push(arguments[i])
//     }
//     return wholeObj
// }