const plugins = [
  { src: '~/plugins/axios.js' },
  { src: '~/plugins/vue-notifications.js', ssr: false },
  { src: '~/plugins/swiper.js', ssr: false },
  { src: '~/plugins/vee-validate.js', ssr: false },
  { src: '~/plugins/vue-lazy-load.js', ssr: false },
  { src: '~/plugins/router.js', ssr: false },
  { src: '~/plugins/i18n.js' },
  { src: '~/plugins/link-images.js', ssr: true },
  { src: '~/plugins/vue-datepicker.js', ssr: false },
];

export default plugins;
