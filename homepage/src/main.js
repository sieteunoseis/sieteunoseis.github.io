import { createApp, h } from "vue";
import App from './App.vue';
var $ = require('jquery');
window.jQuery = $;
require('bootstrap/dist/css/bootstrap.css');
require('devicons/css/devicons.css');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('bootstrap');
require('jquery.easing');

const app = createApp({
  render: () => h(App)
});

app.mount("#app");

require('@/assets/js/grayscale.js');
require('@/assets/js/retainable-rss-embed.js');
require('@/assets/css/grayscale.css');
