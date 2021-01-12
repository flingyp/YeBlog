<template>
  <div>
    <CoverPoster />
    <ArticleContent :article="content" />
  </div>
</template>

<script>
import CoverPoster from '@/components/Page-article/CoverPoster'
import ArticleContent from '@/components/Page-article/ArticleContent'
export default {
  name: 'Article',
  components: {
    CoverPoster,
    ArticleContent,
  },
  data() {
    return {
      content: '',
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get(
      'http://114.55.102.231:7001/default/getArticleById/25'
    )
    return { res }
  },
  created() {
    this.content = this.res.data[0].article_content
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/decorateMarkdown.scss';
</style>
