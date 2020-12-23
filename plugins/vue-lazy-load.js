import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

export default () => {
  Vue.use(VueLazyload, {
    preLoad: 0,
    error: 'https://d9qzjwuieyamt.cloudfront.net/res/images/items/140default_uk.jpg?ih20191113',
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 500,
  });
};
