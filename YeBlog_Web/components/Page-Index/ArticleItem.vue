<template>
  <div class="articleitem-box _flex _mar-tb-20">
    <!-- 左侧 内容 -->
    <div class="article-left-box">
      <div class="item-category _font-35 _not-copy">Code</div>
      <div class="item-title _font-40">开源 —— Ye-blog</div>
      <div class="item-explain _font-16">
        关于Nuxt.js如何实现服务端渲染。何为服务端渲染框架？？？
      </div>
      <div class="item-userinfo _flex _not-copy">
        <div class="userinfo-box _flex-ali-center">
          <div class="user-avatar">
            <img src="https://resource.shirmy.me/image/avatar/shirmy.jpeg" />
          </div>
          <div class="user-name _font-20">Ye Blog</div>
        </div>

        <div class="article-box _flex-ali-center _font-20">
          <div class="_flex-ali-center _mar-lr-10">
            <icon-font type="icon-eye" class="_mar-lr-5" />
            <div>892</div>
          </div>
          <div class="_flex-ali-center _mar-lr-10">
            <icon-font type="icon-xinaixin" class="_mar-lr-5" />
            <div>92</div>
          </div>
          <div class="_flex-ali-center _mar-lr-10">
            <div>2021-1-9 15:50</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧 文章图片 -->
    <div class="article-right-box">
      <img
        src="https://resource.shirmy.me/blog/covers/2020-04-08/lin.png"
        alt="文章图片"
      />
    </div>
  </div>
</template>

<script>
import IconFont from '@/plugins/iconfont.js'
export default {
  name: 'Index-ArticleItem',
  components: {
    IconFont,
  },
}
</script>

<style lang="scss" scoped>
.articleitem-box {
  box-sizing: border-box;

  .article-left-box {
    flex: 1;
    margin-right: 1.875rem;

    .item-title,
    .item-explain {
      cursor: pointer;
    }

    .item-explain {
      margin-top: 0.9375rem;
    }

    .item-userinfo {
      margin-top: 1.25rem;
      justify-content: space-between;

      .userinfo-box {
        .user-avatar {
          width: 35px;
          height: 35px;
          margin-right: 0.625rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .user-name {
        }
      }
    }
  }

  .article-right-box {
    width: 21.25rem;
    min-width: 21.25rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
</style>
