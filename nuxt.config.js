export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'ja' },
    title: '岐阜大学祭執行委員会新歓特設サイト - 第73回岐大祭',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '岐阜大学の新入生に向けた岐大祭執行委員会の紹介や新歓情報を掲載しています。' },
      { hid: 'keywords', name: 'keywords', content:'岐大祭,岐阜大学祭,岐阜大学,岐大,学祭,学園祭,新歓,73,2021,執行委員会,実行委員,委員会,サークル,岐阜' },

      { hid: 'twitter:card', name: 'twitter:card', content:'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content:'@gidaisai' },
      { hid: 'twitter:site', name: 'twitter:creator', content:'@gidaisai' },

      { hid: 'og:title', property: 'og:title', content:'第73回岐大祭執行委員会新歓特設サイト' },
      { hid: 'og:description', property: 'og:description', content:'岐阜大学の新入生に向けた岐大祭執行委員会の紹介や新歓情報を掲載しています。' },
      { hid: 'og:type', property: 'og:type', content:'website' },
      { hid: 'og:url', property: 'og:url', content:'http://www.gidaisai.jp/shinkan/' },
      { hid: 'og:image', property: 'og:image', content:'http://www.gidaisai.jp/shinkan/image/ogp-top.png' },
      { hid: 'og:site_name', property: 'og:site_name', content:'岐大祭執行委員会新歓特設サイト' },
      { hid: 'og:locale', property: 'og:locale', content:'ja_JP' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend (config, ctx) {
    //   config.output.publicPath = '/shinkan/'
    // }
  },
  router: {
    base: '/shinkan'
  },
  mode: 'universal'
}
