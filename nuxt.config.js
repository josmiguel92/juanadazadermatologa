export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/'
  },
  publicRuntimeConfig: {
    BASE_URL: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Juana Daza Vergara ~ Dermatóloga Clinico-quirúrgica y estética',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-HM6RK8F3X8',
        async: true
      },
      {
        src: 'js/ga.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/vue-tailwind' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
    // '@nuxt/content'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // 'markdown-it-div',
      // 'markdown-it-attrs'
    ],
    runtime: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },
  sitemap: {
    hostname: 'https://juanadazavdermatologa.clinic',
    gzip: true
    // exclude: [
    //   '/secret',
    //   '/admin/**'
    // ],
    // routes: [
    //   '/page/1',
    //   '/page/2',
    //   {
    //     url: '/page/3',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in'],

    mode: 'postcss',
    extractors: [
      {
        extractor (content) {
          return content.match(/[\w-.:/]+(?<!:)/g)
        },
        extensions: ['html', 'vue', 'js']
      },
      {
        extractor (content) {
          return content.match(/[A-Za-z0-9-_:/]+/g)
        },
        extensions: ['js']
      }
    ]
  }
}
