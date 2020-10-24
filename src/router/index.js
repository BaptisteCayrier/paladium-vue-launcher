import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import UserAccount from '../views/settings/UserAccount.vue';
import Memory from '../views/settings/Memory.vue';
import Java from '../views/settings/Java.vue';
import GeneralSalesConditions from '../views/settings/GeneralSalesConditions.vue';
import PrivacyPolicy from '../views/settings/PrivacyPolicy.vue';
import CLUF from '../views/settings/CLUF.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    children: [
      {
        path: 'account',
        component: UserAccount,
      },
      {
        path: 'memory',
        component: Memory,
      },
      {
        path: 'java-executable',
        component: Java,
      },
      {
        path: 'general-sales-conditions',
        component: GeneralSalesConditions,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicy,
      },
      {
        path: 'cluf',
        component: CLUF,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
