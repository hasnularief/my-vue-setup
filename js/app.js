import './bootstrap'
import './mixins'
import './filters'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import InputDate from './components/etc/InputDate.vue'
import Loading from './components/etc/Loading.vue'
import Modal from './components/etc/Modal.vue'
import Navbar from './components/etc/Navbar.vue'
import Pagination from './components/etc/Pagination.vue'

Vue.component('input-date', InputDate)
Vue.component('loading', Loading)
Vue.component('modal', Modal)
Vue.component('navbar', Navbar)
Vue.component('pagination', Pagination)

import Index from './components/Index'

const router = new VueRouter({
	routes:[
		{ path:'/', component: Index }
	]
})

new Vue({
    el: '#v-app',
    router
})
