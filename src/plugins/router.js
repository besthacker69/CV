import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		component: () => import( /* webpackChunkName: "NotFound" */ '@/components/notfound')
	},
	{
		path: '/',
		component: () => import(/* webpackChunkName: "Home" */ '@/components/home')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
