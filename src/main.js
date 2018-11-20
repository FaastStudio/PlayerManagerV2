import Vue from "vue";
import App from "./App";
import axios from 'axios';
import router from "./router/index";
import store from './store';

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
Vue.use(BlackDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  axios,
  i18n,
  axios,
  render: h => h(App)
}).$mount("#app");
