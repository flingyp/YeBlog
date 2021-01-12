<template>
  <div
    class="coverposter-box _flex"
    :style="{ backgroundImage: `url(${coverImgUrl})` }"
  >
    <div class="coverposter-category _flex _mar-tb-5 _not-copy">
      <div class="_font-20 _mar-lr-10 category-item">Koa2</div>
      <div class="_font-20 _mar-lr-10 category-item">Nuxt.js</div>
    </div>
    <div class="coverposter-title _font-40 _mar-tb-10">
      关于Nuxt.js如何实现服务端渲染。何为服务端渲染框架？？？
    </div>
    <div class="coverposter-info _font-25 _mar-tb-5 _not-copy">
      by <span class="_mar-lr-20 _font-30">Ye Blog</span> 2021-01-11 11:58:26
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article-CoverPoster',
  data() {
    return {
      coverImgUrl: 'https://resource.shirmy.me/blog/covers/2020-04-08/lin.png',
    }
  },
}
</script>

<style lang="scss" scoped>
.coverposter-box {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 90%;
  min-width: 60%;
  height: calc(100vh - 15rem);
  box-sizing: border-box;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    opacity: 0.5;
    border-radius: 10px;
  }
}

.coverposter-category,
.coverposter-title,
.coverposter-info {
  z-index: 999;
}

.coverposter-category {
  .category-item {
    padding: 0 10px;
    border: 1px solid var(--blog-theme-bg-1);
    border-radius: 8px;
    font-weight: 600;
    color: var(--font-color-primary);
    background: var(--blog-theme-bg-1);
  }
}

.coverposter-title {
  color: var(--font-color-coverposter);
  padding: 0 5px;
}
.coverposter-info {
  color: var(--font-color-coverposter);
  & > span {
    font-weight: 500;
  }
}
</style>
