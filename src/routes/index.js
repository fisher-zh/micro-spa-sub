import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../view/home.vue';
import test from '../view/test.vue';

Vue.use(VueRouter)

// 由于hash模式不支持 base选项，故通过添加baseUrl前缀的方式
const baseUrl = '/sub-app-1';
const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/test',
    component: test
  },
]

// 添加baseUrl
for (let i = 0; i < routes.length; i++) {
  routes[i].path = baseUrl + routes[i].path;
}

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router;
