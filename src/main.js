import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./utils/axios"
import "./utils/vantui"
if (module.hot) {
  module.hot.accept();
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
