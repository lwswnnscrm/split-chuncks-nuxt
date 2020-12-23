const fetch = async (locale, axios) => {
  const params = {
    keys: ['gettext', 'countries'],
    limit: 'all',
  };
  const { data } = await axios.get('https://api3-dev.ssyii.com/api/v3/translations/i18n', { params });
  return data[locale];
};

export default async ({ app, $axios }) => {
  app.i18n.setLocaleMessage(app.i18n.locale, await fetch(app.i18n.locale, $axios));
  app.i18n.beforeLanguageSwitch = async (oldLocale, newLocale) => {
    if (oldLocale !== newLocale) {
      app.i18n.setLocaleMessage(newLocale, await fetch(newLocale, $axios));
      app.i18n.setLocaleCookie(newLocale);
    }
  };
};
