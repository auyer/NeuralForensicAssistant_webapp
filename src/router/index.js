import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Login from '@/components/Login';
import Secure from '@/components/Secure';
import List from '@/components/List';

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login',
      },
      name: 'Hello',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/secure',
      name: 'Secure',
      component: Secure,
    },
  ],
});
