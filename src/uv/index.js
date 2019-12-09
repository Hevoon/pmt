//监控uv
export default function (name) {
    //像node端发送验证请求
   return  $hideAjax(`/init?name=${name}`, "GET")
}