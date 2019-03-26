import Vue from 'vue';
import App from './App.vue';
import navbar from './components/partials/navbar.vue'
import foot from './components/partials/foot.vue'

Vue.config.productionTip = false;
Vue.component('navbar', navbar)
Vue.component('foot', foot)

new Vue({
  render: h => h(App),
}).$mount('#app');
