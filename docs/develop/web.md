# Web 网页端 Note

## 0. 定义开发命名格式规范

1. Page、组件名 Xx 或 XxXx 页面所用的组件文件夹名为 Page(name)-Xx

2. Data、Computed、Methods 等变量名 xX 事件名 xX 或 \_xX

3. 公共类名 \_name-xx-xx (name 为 CSS 样式文件名)

4. 类名 xx-xx

## 1. 用到的字体网站

- [字体网站 1](https://ziyouziti.com/index-index-all.html)

- [字体网站 2](https://font.chinaz.com/yingwenziti_3.html)

## 2. 安装 scss

- `npm i node-sass sass-loader scss-loader --save-dev`

- 在 nuxt.config.js 文件中配置全局 index.scss 文件

```js
// nuxt.config.js
css: [
    {
      src: '@/assets/scss/index.scss',
      lang: 'scss',
    },
  ],
```

## 3. 该项目自适应思路

- 会采取使用百分比布局 和 flex 布局 元素之间使用 rem 单位 配合 媒体查询进行自适应

## 4. 项目引入、使用 rem 单位 (在项目中依然可以使用 px 单位，在编译过后 F12 查看会自动编译成 rem 单位)

- [参考文章](https://segmentfault.com/a/1190000021509063)

重点：

1. 在 default.vue 文件 去配置 根标签 html 字体大小 font-size

2. 在 nuxt.config.js build 中去配置 postcss 的字段 remUnit(换算的基数)的值

3. 因为： 项目的 html 上 rem 单位 = 根标签 font-size / remUnit

## 5. 关于在 Nuxt.js 使用 Window 、document 等对象

- [参考文章](https://www.cnblogs.com/goloving/p/11397285.html)

## 6. 关于项目主题切换功能的实现

改项目实现换肤的原理：

- 给 body 定义两种模式的 类名 light 、dark。通过点击切换不同的类名，不同的类定义不同的 CSS 变量值，达到换肤的效果。

```
1. 在 default.vue 中 的 mounted 可以操作 window 获取当前主题名

2. 调用 vuex中theme.js的 _setTheme()的方法 给document.body.id 设置个类名。 修改本地存储的theme的值和vuex中的存储的主题变量名。
```

- [scss 的@mixin 相关使用](https://blog.csdn.net/ztudouni/article/details/81910620)

- [CSS 自定义变量](https://segmentfault.com/a/1190000015948538)

```scss
// 关于实现在不同模式下不同字体不同颜色的效果
// 1. 使用 scss的 @mixin xxx(xx, xx (定义不同变量)) {}
// 2. 在不同模式下 @include xxx(xx, xx (传入对应的值))
// 3. 在 @mixin 中 定义的是 CSS变量
// 4. 在 具体页面上 使用 通过 var(xxxcss变量)
@mixin theme(
	$theme-bg-1,
	$theme-bg-2,
	$font-color-primary,
	$font-color-article,
	$font-color-coverposter
) {
	--blog-theme-bg-1: #{$theme-bg-1};
	--blog-theme-bg-2: #{$theme-bg-2};

	--font-color-primary: #{$font-color-primary};
	--font-color-article: #{$font-color-article};
	--font-color-coverposter: #{$font-color-coverposter};
}

body {
	&#light {
		@include theme(
			$theme-bg-1: rgba(299, 299, 299, 1),
			$theme-bg-2: rgba(236, 240, 241, 1),
			$font-color-primary: rgba(25, 42, 86, 1),
			$font-color-article: rgba(59, 59, 152, 1),
			$font-color-coverposter: rgba(247, 241, 227, 1)
		);
	}

	&#dark {
		@include theme(
			$theme-bg-1: rgba(53, 59, 72, 1),
			$theme-bg-2: rgba(53, 59, 72, 0.5),
			$font-color-primary: rgba(220, 221, 225, 1),
			$font-color-article: rgba(255, 255, 255, 1),
			$font-color-coverposter: rgba(247, 241, 227, 1)
		);
	}
}

// 测试  某个页面或组件
.test {
	color: var(--font-color-primary);
}
```

## 7. 使用 Marked + highlight.js 实现 Markdown 语法编译和代码高亮

1. 安装 Marked + highlight.js

2. 在 plugins 创建 markdown.js 文件 并且在 nuxt_config.js 中配置

```js
import Vue from 'vue'
// 引入两个插件
import marked from 'marked'
import hljs from 'highlight.js'
// 实现 Markdown 代码高亮的相关样式 （可自选）
import 'highlight.js/styles/monokai-sublime.css'
// 配置相关选项
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	pedantic: false,
	sanitize: false,
	tables: true,
	breaks: true,
	smartLists: true,
	highlight: (code, language) => {
		const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
		return hljs.highlight(validLanguage, code).value
	}
})
// 挂在到Vue实例上
Vue.prototype.$marked = marked
```

3. 在 相关页面使用通过 this.$marked(xxx)

4. 在此基础上去添加另外的 CSS 样式，装饰代码块等部分的样式

- 样式文件为 scss/decorateMarkdown.scss (在 article 文件引入)
