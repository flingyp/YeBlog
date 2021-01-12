<template>
  <div class="coverposter-box _flex">
    <!-- 左侧图片 -->
    <div
      class="coverposter-left-box"
      :style="{ backgroundImage: `url(${coverImgUrl})` }"
    ></div>
    <!-- 右侧内容 -->
    <div class="coverposter-right-box _flex">
      <div class="coverposter-classify _font-25">Code</div>
      <div class="coverposter-title _font-60">开源 —— Ye-blog</div>
      <div class="coverposter-avatar _font-25">
        by <span class="_font-30">FlingYp</span> 2021-01-04
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index-CoverPoster',
  data() {
    return {
      coverImgUrl: 'https://resource.shirmy.me/blog/covers/2020-04-08/lin.png',
    }
  },
}
</script>

<style lang="scss" scoped>
.coverposter-box {
  width: 90%;
  min-width: 60%;
  height: calc(100vh - 15rem);
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0.9375rem 1.25rem;

  & > div {
    flex: 1;
  }

  .coverposter-left-box {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    border-radius: 4px;
    margin-right: 4.5rem;
  }

  .coverposter-right-box {
    flex-direction: column;
    justify-content: center;

    .coverposter-classify {
      color: var(--font-color-primary);
      font-weight: 400;
      margin: 0;
    }
    .coverposter-title {
      color: var(--font-color-primary);
      font-weight: 600;
    }
    .coverposter-avatar {
      color: var(--font-color-primary);
      font-weight: 500;
      letter-spacing: 0.5px;
      margin: 0.625rem 0;

      & > span {
        margin: 0 0.625rem;
        font-weight: 600;
      }
    }
  }
}
</style>
