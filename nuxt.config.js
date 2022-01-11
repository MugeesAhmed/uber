export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 8001 // default: 3000
  },
  head: {
    title: 'Gari cotizador',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cotiza el seguro que te mereces y obten el mejor precio con base en tus hábitos de conducción' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-scroll.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: '~/components/LoadingBar.vue',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/router-extras-module
    '@nuxtjs/router-extras',
  ],
  
  styleResources: {
    scss: [
      './assets/css/main.scss'
    ]
  },
  publicRuntimeConfig: {
    axios: {
      // baseURL: 'http://localhost:3000/v1/'
      // baseURL: 'http://3.143.238.194:3000/v1'
      baseURL: 'https://api.gari.mx/v1/'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['@nuxtjs/universal-storage', {
        storage: {
            initialState: {
            },
        },
    }],
    'nuxtjs-mdi-font',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
  }
}