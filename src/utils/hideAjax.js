export default function () {
    let oldXHR = window.XMLHttpRequest
    return function (url, method, data, async = true) {
        let xhr = new oldXHR()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                } else {
                    alert("error");
                }
            }
        }
        xhr.withCredentials = true
        xhr.open(method, url, async)
        if (method === "POST") {
            xhr.setRequestHeader("content-type", "application/json")
            xhr.send(JSON.stringify(data))
        } else {
            xhr.send()
        }

    }
}