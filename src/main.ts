import Vue from 'vue';
import './types';
import store, { IStoreRootState } from './store/store';
import PortalVue from 'portal-vue';
import { createRouter } from './router'
// import pHome from './components/pages/p-home';

Vue.use(PortalVue);

new Vue({
  store,
  el: '#app-main',
  router: createRouter(),
  // components: {
  // }
});
