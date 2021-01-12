export const state = () => ({
  theme: 'light'
})

export const mutations = { // 切换主题
  _setTheme(state, themeName) {
    document.body.id = themeName
    window.localStorage.setItem('theme', themeName)
    state.theme = themeName
  },
}
