const Router = require('koa-router')
const {
	test,
	addArticle,
	getArticles,
	newPublishArticle
} = require('./callback')
const { version } = require('../config')

const web = new Router({
	prefix: `/${version}/api/web` // 设置路由前缀接口
})

web.get('/test', test) // 测试接口

/**
 * @添加文章接口 post
 * json参数
 * 		标题：title   (必传)
 * 		创建时间： create_time
 * 		更新时间： update_time
 * 		发布人： user_name   (必传)
 * 		文章类别： article_category
 * 		文章内容： article_contect (必传)
 * 		文章浏览量： article_views
 * 		文章点赞量： article_likes
 * 		文章封面图片： article_coverimg
 * 		文章简介： article_introduce
 */
web.post('/addArticle', addArticle)

/**
 * @获取文章接口 get
 * 参数：
 * 		页码: page (必传) 默认是 0
 * 		数量: limit (必传) 默认是 5
 */
web.get('/getArticles', getArticles)

/**
 * @获取最新发布的一篇文章信息 get
 */
web.get('/newPublishArticle', newPublishArticle)

module.exports = web
