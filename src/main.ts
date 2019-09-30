import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.prototype.$sync = function(key: string, value: any) {
  this.$emit(`update:${key}`, value);
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
