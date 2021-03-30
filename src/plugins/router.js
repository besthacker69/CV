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
	{
		path: '/skills',
		component: () => import(/* webpackChunkName: "Skill" */ '@/components/skills')
	},
	{
		path: '/projects',
		component: () => import(/* webpackChunkName: "Project" */ '@/components/projects')
	},

]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
