//监控uv
export default function (name) {
    //像node端发送验证请求
   return  $hideAjax(`http://localhost:3010/init?name=${name}`, "GET")
}