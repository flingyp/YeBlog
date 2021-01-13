/**
 * 文章模型 model
 */
const mongoose = require('mongoose')
const articleSchema = require('../schema/article')

const articleModel = mongoose.model('article', articleSchema)

// 导出 文章model
module.exports = articleModel
