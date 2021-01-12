<template>
  <div>
    <Header
      :themeIcon="themeIcon"
      @switchThemeIcon="switchThemeIcon"
      :navItems="navItems"
    />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

import { mapMutations } from 'vuex'
export default {
  components: {
    Header,
  },
  data() {
    return {
      themeIcon: '',
      navItems: [
        {
          name: '首页',
        },
        {
          name: '归档',
        },
        {
          name: '标签',
        },
        {
          name: '关于',
        },
        {
          name: '留言墙',
        },
      ],
    }
  },
  mounted() {
    // 获取 本地存储的 当前主题名
    let nowTheme = window.localStorage.getItem('theme')
    this.themeIcon = nowTheme
    this._setTheme(nowTheme || 'light')
  },
  methods: {
    ...mapMutations({
      _setTheme: 'theme/_setTheme',
    }),
    switchThemeIcon(themeIcon) {
      console.log('themeIcon', themeIcon)
      this.themeIcon = themeIcon
    },
  },
}
</script>

<style>
html {
  /* 1rem = 16px */
  font-size: 16px;
}
body {
  font-family: 'HyFTroy-2', '文鼎PL简报宋';
  background-color: var(--blog-theme-bg-1);
}
</style>
<style lang="scss"></style>
