export default ({
  $axios, app,
}) => {
  $axios.onRequest((config) => {
    if (config.params) {
      config.params.lang = app.i18n.locale;
    } else {
      config.params = { lang: app.i18n.locale };
    }
  });
};
