<template>
  <div class="articlecontent-box" v-html="html"></div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'Article-ArticleContent',
  data() {
    return {
      html: '',
    }
  },
  props: {
    article: {
      type: String,
    },
  },
  mounted() {
    this.html = this.$marked(this.article)
  },
}
</script>

<style lang="scss" scoped>
.articlecontent-box {
  box-sizing: border-box;
  width: 60%;
  padding: 4.125rem 2.25rem;
  margin: -7.125rem auto 0;
  border-radius: 10px;
  box-shadow: 1px 1px 20px rgba(132, 129, 122, 0.5);
  background: var(--blog-theme-bg-1);
  color: var(--font-color-primary);
  z-index: 999;
  position: relative;
}
</style>
