export default function (baseUrl) {
    let oldXHR = window.XMLHttpRequest
    return function (url, method, data, async = true) {
        let newUrl = `${baseUrl}${url}`
        console.log(newUrl)
        return new Promise((resolve, reject) => {
            let xhr = new oldXHR()
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve('ok')
                    } else {
                        reject('error')
                    }
                }
            }
            xhr.withCredentials = true
            xhr.open(method, newUrl, async)
            if (method === "POST") {
                xhr.setRequestHeader("content-type", "application/json")
                xhr.send(JSON.stringify(data))
            } else {
                xhr.send()
            }
        })
    }
}