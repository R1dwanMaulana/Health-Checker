const isDev = process.env.NODE_ENV !== "production";

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-srcdir
  srcDir: "src",

  // https://nuxtjs.org/api/configuration-builddir
  buildDir: "functions/.nuxt",

  // https://nuxtjs.org/api/configuration-head
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // {
      //   hid: "description",
      //   name: "description",
      //   content: "Aplikasi prediksi harga kost",
      // },
      // // { property: "og:image", content: "/icon.png" },
      // { name: "format-detection", content: "telephone=no" },
      // {
      //   name: "description",
      //   content: "Aplikasi prediksi harga kost",
      // },
      // {
      //   property: "og:title",
      //   content: "Kosbot | Aplikasi prediksi harga kost",
      // },
      // {
      //   property: "og:description",
      //   content: "Aplikasi prediksi harga kost",
      // },
      // { property: "og:type", content: "website" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    "@nuxt/http",

    // https://pwa.nuxtjs.org/
    "@nuxtjs/pwa",

    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     // TODO: Change this id to your Google Analytics ID
    //     id: process.env.GOOGLE_ANALYTICS
    //   }
    // ]
  ],

  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify",
  ],

  vuetify: {},

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/api/configuration-css
  css: ["~assets/styles/app"],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    transpile: ["vee-validate/dist/rules"],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
