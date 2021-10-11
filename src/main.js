import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import Cookies from 'js-cookie'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	render: h => h(App),
	data:{
		access_token: Cookies.get('access_token'),
		refresh_token: Cookies.get('refresh_token'),
	},
}).$mount('#app')

Vue.prototype.$api = axios.create({
	baseURL: process.env.VUE_APP_BASEURL,
	responseType: 'json',
	headers:{
		'Content-Type': 'application/json',
	},
})

Vue.prototype.$refreshAccessToken = async function(){
	let tmp = {};
	tmp.access_token = this.$root.access_token;
	tmp.refresh_token = this.$root.refresh_token;

  let res = await this.$api.post('/refresh', (JSON.stringify(tmp)));

	if (res.data.status == 1) {
    this.$root.access_token = res.data.access_token;
    Cookies.set('access_token', res.data.access_token);
	}
	else{
    this.$router.push({path: '/'});
	}
}