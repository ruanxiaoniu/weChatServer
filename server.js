var http = require('http')
var url = require('url') // node路由
// 引入Node.js自带的child_process模块
var child_process = require('child_process')
var router = require('./router/index')
var queryString = require('querystring')
 // 创建服务器
http.createServer((req, res) => {
  console.log('发起请求');
  // var pathName = url.parse(req.url).pathname
  const [pathName, queryStr] = req.url.split('?')
  console.log(pathName, queryStr);
  const result = queryString.parse(queryStr)
  console.log(result.username);
  
  router.router(pathName)
  // 关闭连接
  res.end()
}).listen(3000, () => {
  console.log('正在监听...');
  // 在默认浏览器中打开
  // child_process.exec(`start http://127.0.0.1:3000`)
})
