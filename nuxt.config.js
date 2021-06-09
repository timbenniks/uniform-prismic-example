export default {
  target: 'static',
  head: {
    title: 'uniform-prismic-poorman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/pwa',
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://uniform-integration.cdn.prismic.io/api/v2',
      },
    ],
    ['nuxt-sm'],
    'cookie-universal-nuxt',
    '~/modules/uniform/optimize/initialize.js',
  ],
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
}
