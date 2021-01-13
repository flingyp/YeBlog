/**
 * 文章 Schema
 */
let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * @一篇文章的Schema
 * 标题：title
 * 创建时间： create_time
 * 更新时间： update_time
 * 发布人： user_name   （Web端没有去发布内容 会在后台发布）
 * 文章类别： article_category
 * 文章内容： article_contect
 * 文章浏览量： article_views
 * 文章点赞量： article_likes
 * 文章封面图片： article_coverimg
 * 文章简介： article_introduce
 */

let articleSchema = new Schema(
	{
		title: {
			type: String,
			trim: true
		},
		user_name: {
			type: String,
			trim: true
		},
		article_views: {
			type: Number,
			default: 0
		},
		article_likes: {
			type: Number,
			default: 0
		},
		article_category: String,
		article_contect: String,
		article_coverimg: String,
		article_introduce: String
	},
	{
		/**
		 * timestamps选项会在创建文档时自动生成createAt和updateAt两个字段，值都为系统当前时间。并且在更新文档时自动更新updateAt字段的值为系统当前时间
		 * 参考文章: https://www.cnblogs.com/duhuo/p/6232534.html
		 */
		timestamps: { createdAt: 'create_time', updatedAt: 'update_time' }
	}
)

module.exports = articleSchema
