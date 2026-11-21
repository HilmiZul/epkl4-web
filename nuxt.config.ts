import pkg from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-07',
  devtools: { enabled: false },
  ssr: false,
  vue: {
    vapor: false,
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.min.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2/dist/js/bootstrap.bundle.min.js" },
      ]
    }
  },
  // Workaround bug Nuxt 4.6.4: `devServer.host` yang tidak di-set akan
  // ter-resolve menjadi objek kosong `{}` (bukan string/undefined), sehingga
  // `nuxt dev` gagal dengan "options.hostname.toLowerCase is not a function".
  // Nilainya di-set eksplisit agar selalu berupa string.
  devServer: {
    host: process.env.NUXT_HOST || process.env.NITRO_HOST || process.env.HOST || 'localhost',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.PB_API_BASE_URL,
      apiPort: process.env.PB_API_PORT,
      appVersion: pkg.version,
      author: pkg.author,
    },
  },
})
