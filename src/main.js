import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import './assets/main.scss';

new Vue({
  el: '#sub-app-template',
  router,
  store,
  render: h => h(App)
});
