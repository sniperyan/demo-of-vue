import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

// 全局配置  设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
