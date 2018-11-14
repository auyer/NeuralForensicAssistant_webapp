import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
