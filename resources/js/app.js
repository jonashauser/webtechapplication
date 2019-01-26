import Vue from 'vue'
import App from './components/App'

require('./bootstrap');

window.Vue = require('vue');

Vue.component('app', require('./components/App.vue').default);

Vue.config.productionTip = false
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
