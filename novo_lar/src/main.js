import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import VueMdl from 'vue-mdl';
Vue.use(VueMdl);

Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({ 
  routes,
  mode: 'history' 
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
