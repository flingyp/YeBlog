# Server 后端 Note

## 项目搭建初始化

0. 使用的框架 或 插件

- Koa、Koa-router、Mongoose、nodemon

- koa-body

1. 后端项目文件结构梳理

```
- api_web 文件夹 （web端相关接口编写）

- mongo 文件夹 （定义mongodb的 schema 和 model）

- config.js 文件 （需要配置变量的地方）

- main.js 文件 （入口文件）
```

2. 安装 koa、koa-router、nodemon、Mongoose

- [Koa-router 使用参考](https://www.jianshu.com/p/f169c342b4d5)

3. 起步 Hello World

```js
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
	ctx.body = 'hello World'
})

app.listen(3001)
```

4. 介绍 安装 MongoDB 数据库

> MongoDB 是由 C++语言编写的，是一个基于分布式文件存储的开源数据库系统。

讲数据存储为一个文档。 数据结构由键值对组成。类似 JSON 对象。

术语：
database 数据库  
collection 集合 （一组数据的集合，类似表）
document 文档 （一条具体的数据）
field 字段（文档中的属性名称）

本地安装 MongoDB(针对 Win 系统)

- [官方网址](https://www.mongodb.com/)

- 配置环境变量

- 通过 cmd 检查当前版本 `mongod --version`

启动和关闭数据库

> mongod 默认使用执行 mongod 命令 会在所处盘符根目录下的 /data/db 作为自己的数据存储目录 所以第一次执行该命令的时候之前需要手动创建一个 /data/db

- `mongod`

数据目录:

MongoDB 将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )

如果想要修改默认的数据存储目录，可以：

- `mongod --dbpath=数据存储目录路径`

5. 编写接口流程

- 定义相关 Schema

- 然后转换为模型 Model

- 在编写相关接口下引入 Model 可以对其进行增删改查的操作
