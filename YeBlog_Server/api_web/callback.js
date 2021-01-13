/**
 * 接口会执行的函数
 */

let articleModel = require('../mongo/model/article')

const test = ctx => {
	ctx.body = '测试'
}

const addArticle = async ctx => {
	let { title, user_name, article_contect } = ctx.request.body
	// 文章标题、发布人、文章内容不能为空
	if (!title || !user_name || !article_contect) {
		ctx.status = 200
		ctx.body = {
			code: 500,
			message: '文章标题、发布人或文章内容不能为空',
			data: ''
		}
		return
	}
	const article = await new articleModel(ctx.request.body).save()
	if (article) {
		ctx.status = 200
		ctx.body = {
			code: 200,
			message: '新增文章',
			data: article
		}
		return
	} else {
		ctx.status = 500
		ctx.body = {
			code: 200,
			message: '新添文章失败'
		}
		return
	}
}

const getArticles = async ctx => {
	let { page = 0, limit = 5 } = ctx.query
	const allArticles = await articleModel
		.find()
		.skip(Number(page * limit))
		.limit(Number(limit))
	if (allArticles) {
		ctx.status = 200
		ctx.body = {
			code: 200,
			message: '查询成功',
			data: allArticles
		}
		return
	}
}

const newPublishArticle = async ctx => {
	ctx.body = '11111'
}

module.exports = {
	test,
	addArticle,
	getArticles,
	newPublishArticle
}
