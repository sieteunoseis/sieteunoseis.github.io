// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
var $ = require('jquery')
window.jQuery = $
require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('@fortawesome/fontawesome-pro/css/all.min.css')
require('@/assets/css/grayscale.css')
require('bootstrap')
require('jquery.easing')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

require('@/assets/js/grayscale.js')
require('@/assets/css/grayscale.css')
