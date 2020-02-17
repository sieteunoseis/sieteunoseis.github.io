import Vue from 'vue'
import App from './App.vue'
var $ = require('jquery')
window.jQuery = $
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('@fortawesome/fontawesome-pro/css/all.min.css')
require('bootstrap')
require('jquery.easing')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

require('@/assets/js/grayscale.js')
require('@/assets/css/grayscale.css')
