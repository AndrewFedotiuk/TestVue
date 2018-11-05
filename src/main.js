import Vue from 'vue'
import App from './App.vue'
import {i18n} from './plugins/i18n.js'
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyDpUsSe1a4wfDGvYA0aGQyVsVjNFxNNAxY',
		libraries: 'places',
		language: i18n.locale
	},
});

Vue.config.productionTip = false;

new Vue({
	VeeValidate,
	i18n: i18n,
	render: function (h) {
		return h(App)
	},
}).$mount('#app');
