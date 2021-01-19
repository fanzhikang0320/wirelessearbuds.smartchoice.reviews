
const Webpack  = require('webpack');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Wireless Earbuds - SMART CHOICE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We tested many wireless earbuds on sound quality, build quality, comfort, battery life, device compatibility and much more. Here is our Top 4 List for best Wireless Earbuds 2020' },
      { hid: 'keyword', name: 'keyword', content: 'wireless earbuds， best earbuds，earphone '}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/reset.scss'
  ],
  loading: {
    color: '#308FF3'
  },
  router: {
    prefetchLinks: false
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    verdor: ['axios'],
    plugins: [
      new Webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 100
        }
      }
    }
  },

  axios: {
    baseURL: 'http://127.0.0.1:8010'
  },
  // 配置主机和域名

  server: {
    port: '8010',
    host: '127.0.0.1'
  }
}
