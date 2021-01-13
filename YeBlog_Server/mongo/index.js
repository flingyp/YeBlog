/**
 * 连接数据库
 */

let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/YeBlog_DB')

let db = mongoose.connection

db.on('error', () => {
	console.error.bind('YeBlog_DB数据库连接失败:', console)
})

db.once('open', () => {
	console.log('YeBlog_DB数据库连接成功！！！')
})
