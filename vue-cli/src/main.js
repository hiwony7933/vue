import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   tempate : '<div>app<</div>'
// }

new Vue({
  render: h => h(App),
  components : {
    'app' : App
  }
}).$mount('#app')
