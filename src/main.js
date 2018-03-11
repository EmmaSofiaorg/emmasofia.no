// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate';
import router from './router';
import VueHead from 'vue-head';
import VueStash from 'vue-stash';
import marked from 'marked';

Vue.use(VueHead);
Vue.use(VueStash);
Vue.use(VeeValidate);

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    renderMarkDown(text) {
      return marked(text)
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    store: {
      loading: '',
      cart: {
        lineItems: [],
      },
      cartId: '',
      cartShown: false,
    }
  },
  template: '<App/>',
  components: { App }
})
