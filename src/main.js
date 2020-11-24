import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vant.js'
import { Lazyload, Toast, List } from 'vant';
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(List);

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')