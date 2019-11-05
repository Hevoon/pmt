//监控uv
export default function (name) {
    //像node端发送验证请求
    $hideAjax(`http://localhost:3010/init?url=${name}`, "GET")
}