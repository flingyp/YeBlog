# Docsify

> 有了 Docsify，从此爱上看文档

## 1. 安装

- `npm i docsify-cli -g`

## 2. 初始化项目

- `docsify init ./docs`

## 3. 本地预览

- `docsify serve docs`

## 4. 设置名字和仓库地址

```html
<!-- index.html -->
<script>
	window.$docsify = {
		name: 'Ye’s YeBlog',
		repo: 'https://github.com/flingyp/YeBlog',
		coverpage: true, // 设置封面
		loadSidebar: true // 配置侧边栏
	}
</script>
```

## 5. 设置封面

- 设置 **coverpage 字段** 为 true

- 在 docs 目录下创建 \_coverpage.md 文件

```md
Ye Blog

> 基于 Nuxt.js + Vue2.0 个人博客

- 个人博客 | 支持暗黑主题 | 使用 MarkDown 语法

[GitHub](https://github.com/flingyp/YeBlog)
[开发历程]()
```

## 6. 配置侧边栏

- 设置 **loadSidebar 字段** 为 true

- 在 docs 目录下创建\_sidebar.md 文件

```md
- [docsify 文档简单编写介绍](/develop/docsify)
```

## 7. 写内容

可以在 docs 目录下直接编写 md 文件或者创建文件夹去编写 md 文件。然后去配置侧边栏的链接指向该文件即可。
