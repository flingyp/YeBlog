export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'YeBlog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '@/static/rem/flexible.js',
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    {
      src: '@/assets/scss/index.scss',
      lang: 'scss',
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui', '@/plugins/markdown'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3001/v1/api/web',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: [
      require('postcss-px2rem')({
        // 配置的换算的基数
        remUnit: 16,
      }),
    ],
  },
}
