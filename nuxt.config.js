export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hairy Ghost - Twin Cities Guide to Halloween, Haunted House, Movies and Attractions',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Hairy Ghost! Your guide to Halloween, Haunted Houses, Movies and Attractions in the Twin Cities.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:description', content: 'Welcome to Hairy Ghost! Your guide to Halloween, Haunted Houses, Movies and Attractions in the Twin Cities.' },
      { property: 'og:title', content: 'Hairy Ghost - Twin Cities Guide to Halloween, Haunted House, Movies and Attractions' },
      { property: 'og:url', content: 'https://www.hairyghost.com' },
      { property: 'og:locale', content: 'en_US' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

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
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
