<template>
  <div>
    <cover-poster />
    <article-list />
  </div>
</template>

<script>
import CoverPoster from '@/components/Page-Index/CoverPoster'
import ArticleList from '@/components/Page-Index/ArticleList'
export default {
  name: 'Index',
  components: {
    CoverPoster,
    ArticleList,
  },
}
</script>

<style></style>
