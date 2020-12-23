const i18n = {
  locales: [
    {
      name: 'English',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/uk.png',
      iso: 'en-GB',
      code: 'en',
      countryCode: 'GB',
      currency: 'gbp',
    },
    {
      name: 'German',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/de.png',
      iso: 'de-DE',
      code: 'de',
      countryCode: 'DE',
      currency: 'eur',
    },
    {
      name: '中国 (Chinese)',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/cn.png',
      iso: 'zh-CN',
      code: 'cn',
      countryCode: 'CN',
      currency: 'cny',
    },
    {
      name: 'Canadian',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/ca.png',
      iso: 'en-CA',
      code: 'ca',
      countryCode: 'CA',
      currency: 'cad',
    },
    {
      name: 'Australian',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/au.png',
      iso: 'en-AU',
      code: 'au',
      countryCode: 'AU',
      currency: 'aud',
    },
    {
      name: 'Espanol',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/es.png',
      iso: 'es-ES',
      code: 'es',
      countryCode: 'ES',
      currency: 'eur',
    },
    {
      name: 'American',
      icon: 'https://d9qzjwuieyamt.cloudfront.net/res/images/_png/flags/us.png',
      iso: 'en-US',
      code: 'us',
      countryCode: 'US',
      currency: 'usd',
    },
  ],
  defaultLocale: 'en',
  loadLanguagesAsync: true,
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'lang',
    fallbackLocale: 'en',
  },
  vueI18n: {
    fallbackLocale: false,
  },
  vuex: {
    moduleName: 'i18n',
    syncLocale: true,
    syncMessages: false,
    syncRouteParams: true,
  },
};

export default i18n;
