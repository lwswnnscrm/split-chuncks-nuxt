const buildConfig = (isDev = false) => ({
  optimizeCss: true,
  minimize: true,
  // analyze: true,
  cssSourceMap: true,
  ...(!isDev && {
    extractCSS: true,
  }),
  ...(!isDev && {
    vendor: [
      'bootstrap-vue/nuxt',
      '@nuxtjs/axios',
      '@nuxtjs/pwa',
      '@nuxtjs/device',
      'cookie-universal-nuxt',
      'nuxt-i18n',
      'nuxt-gmaps',
    ],
  }),
  ...(!isDev && {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  }),
  ...(!isDev && {
    vendor: [
      'bootstrap-vue/nuxt',
      '@nuxtjs/axios',
      '@nuxtjs/pwa',
      '@nuxtjs/device',
      'cookie-universal-nuxt',
      'nuxt-i18n',
      'nuxt-gmaps',
    ],
  }),
  transpile: ['vee-validate/dist/rules'],
  filenames: {
    app: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash].js'),
    chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash].js'),
    css: ({ isDev }) => (isDev ? '[name].css' : '[name].[contenthash].css'),
  },
  ...(!isDev && {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        maxSize: 256000,
      },
    },
  }),
  // publicPath: 'https://test-cdn.com/ss-front',
});

export default buildConfig;
