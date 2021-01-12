<template>
  <div class="articlelist-box">
    <!-- 没有文章列表 -->
    <div
      v-if="!noArticle"
      class="no-articles articles _flex-jus-center _font-25"
    >
      <div>啥也没有 QAQ ~~</div>
    </div>
    <!-- 有文章列表 -->
    <div v-else class="articles">
      <article-item />
      <article-item />
      <article-item />
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/Page-Index/ArticleItem'
export default {
  name: 'Index-ArticleList',
  components: {
    ArticleItem,
  },
  data() {
    return {
      noArticle: true,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.articlelist-box {
  position: relative;
  width: 55%;
  min-width: 50%;
  margin: -4vw auto 0;

  .articles {
    padding: 3rem;
    box-sizing: border-box;
    border-radius: 8px;
    background: var(--blog-theme-bg-2);
    color: var(--font-color-article);
  }
}
</style>
