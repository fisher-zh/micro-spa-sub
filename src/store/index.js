import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userId: 123456
  },
  modules: {}
})

export default store;
