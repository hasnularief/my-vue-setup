import axios from 'axios'
import Vue from 'vue'
import Cookie from 'tiny-cookie'
import VueCookie from 'vue-cookie'
import 'bootstrap'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    // console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

VueCookie.getOr =  (
	function (name, defaultValue, parseJson = false) { 
		return Cookie.get(name) ? (parseJson ? 
				JSON.parse(Cookie.get(name)) : 
			Cookie.get(name)) : 
		defaultValue 
	})
Vue.use(VueCookie);
