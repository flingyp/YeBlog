import Vue from 'vue'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

/**
 *  renderer: 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    gfm：启动类似Github样式的Markdown,填写true或者false
    pedatic：只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    sanitize: 原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    tables： 支持Github形式的表格，必须打开gfm选项
    breaks: 支持Github换行符，必须打开gfm选项，填写true或者false
    smartLists：优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    highlight: 高亮显示规则 ，这里我们将使用highlight.js来完成
 */

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
  },
})

Vue.prototype.$marked = marked
