import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './style/base.css'


Vue.config.productionTip = false

new Vue({
  // 注入
  router,
  render: h => h(App),
}).$mount('#app')
