<template>
  <div class="header-box _flex-ali-center">
    <div class="_flex-ali-center">
      <icon-font
        @click="setTheme"
        class="theme-icon"
        type="icon-sun"
        v-if="themeIcon === 'dark'"
      />
      <icon-font
        @click="setTheme"
        class="theme-icon"
        type="icon-yueliang"
        v-else
      />
      <span class="header-title _not-copy">Ye Blog</span>
    </div>

    <div class="header-nav-item _flex-ali-center _not-copy">
      <nav class="nav-item" v-for="(item, index) in navItems" :key="index">
        {{ item.name }}
      </nav>

      <nav class="nav-search">
        <icon-font type="icon--search1"></icon-font>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import IconFont from '@/plugins/iconfont.js'

export default {
  components: {
    IconFont,
  },
  props: {
    themeIcon: {
      type: String,
      default: '',
    },
    navItems: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    ...mapMutations({
      _setTheme: 'theme/_setTheme',
    }),
    setTheme() {
      if (this.$store.state.theme.theme === 'light') {
        this._setTheme('dark') // 切换不同模式
        this.$emit('switchThemeIcon', 'dark') // 切换图标
      } else {
        this._setTheme('light')
        this.$emit('switchThemeIcon', 'light')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.header-box {
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;
  padding: 1.5625rem 13.75rem;
  margin-bottom: 0.9375rem;
}

.theme-icon {
  color: var(--font-color-primary);
  border-radius: 50%;
  font-size: 3rem;
  cursor: pointer;
  margin-right: 1.875rem;
}

.header-title {
  font-size: 2.5rem;
  color: var(--font-color-primary);
  letter-spacing: 0.1875rem;
  font-family: 'HyFTroy-2', '庞门正道真贵楷体';
}

.header-nav-item {
  nav {
    font-size: 1.125rem;
    color: var(--font-color-primary);
    margin: 0 0.9375rem;
    cursor: pointer;
  }

  .nav-search {
    margin-top: 4px;
  }
}
</style>
