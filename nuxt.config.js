import i18n from './configs/i18n';
import buildConfig from './configs/build-config';
import plugins from './configs/plugins';
import modules from './configs/modules';
import createAxiosUrl from './configs/axios';

const isDev = process.env.NODE_ENV === 'develop';

export default {
  telemetry: true,
  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),
  env: {
    ENV_STAGE: process.env.ENV_STAGE,
  },
  /*
  ** Headers of the page
  ** process.env.npm_package_name
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://ssfront.s3.eu-west-1.amazonaws.com/bdTjXGyv26XVOUClDHSsctIfPMHghTUN.vnd.microsoft.icon' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/style/font-awesome.scss',
    '~/style/global.scss',
    'swiper/dist/css/swiper.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules,
  sentry: {
    dsn: 'https://ba03badb1883424bae045ac24865e66e@sentry.omnismain.com/9',
    disabled: isDev,
  },
  i18n,
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: createAxiosUrl(isDev, process.env.ENV_STAGE),
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: createAxiosUrl(isDev, process.env.ENV_STAGE),
    },
  },
  /*
  ** Build configuration
  */
  build: buildConfig(isDev),
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type),
    },
  },
  router: {
    linkActiveClass: 'active-link',
    mode: 'history',
    middleware: ['user'],
  },
};
