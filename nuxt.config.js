require('dotenv').config()

export default {

  mode: 'universal',
  target: 'static',

  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  head: {
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - ${process.env.TITLE}` : `${process.env.TITLE}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        property: 'og:title',
        name: 'title',
        content: process.env.TITLE
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION || ''
      },
      {
        hid: 'image',
        name: 'image',
        property: 'og:image',
        content: '/favicon.png'
      }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  content: {
    liveEdit: false,
    nestedProperties: ['tags.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    inlineImageLimit: 1000,
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 75
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {

      quality: 80
    }
  },
  components: true
}
