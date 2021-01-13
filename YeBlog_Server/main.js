require('./mongo') // 连接数据库
let { port } = require('./config.js') // 引入配置文件
const Koa = require('koa')
const koaBody = require('koa-body')

let app = new Koa()

let api_web = require('./api_web') // 引入 web端 模块路由

app.use(koaBody())
app.use(api_web.routes()).use(api_web.allowedMethods())

app.listen(port, () => {
	console.log(`服务已启动在${port}端口......`)
})
