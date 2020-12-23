import Vue from 'vue';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

export default () => {
  Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
  });

  Vue.component('ValidationObserver', ValidationObserver);
  Vue.component('ValidationProvider', ValidationProvider);
};
