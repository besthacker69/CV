<template>
    <v-app class="fill-height brightness" style="background:url('back.webp') right; background-size: cover;">
		<div class="" style="height:100vh;">
		<!-- <v-img src="back.png" width="100%" height="100%" style="position:absolute; right:-22%; top:6%;"></v-img> -->
		<!-- <v-img src="nasgor.png" width="600px" style="position:absolute; right:-22%; top:6%;"></v-img> -->
			<div 
				class="d-flex flex-row align-center justify-space-between px-4" 
				style="width:100vw; border-bottom:1px solid; border-color:rgb(200,200,200,0.15); position:fixed; height:55px;"
			>	
				<!-- <div class="d-flex flex-row align-center justify-space-between" style="width:100%; max-width:1200px;"> -->
					<div class="d-flex flex-row" style="cursor:pointer; line-height:1;" v-on:click="menuLink('/', 0)">
						<v-icon large :class="$vuetify.breakpoint.xs ? 'pr-0':'pr-2'">mdi-account</v-icon>
						<div id="logo" class="d-flex flex-column justify-center align-start">
							<span class="text-center" style="font-size:1rem; font-weight:500;"> Ken Welly </span>
							<span class="text-center" style="font-size:0.7rem; font-weight:300;"> Curriculum Vitae </span>
						</div>
					</div>
					<!-- <h3 class="" style="font-size:20px; font-weight:500;">PNC Properti</h3> -->
					<div class="d-flex flex-row align-center justify-center">
						<v-menu offset-y content-class="elevation-1">
							<template v-slot:activator="{ on, attrs }">
								<v-btn 
									text class="pa-6 text-capitalize" 
									:disabled="!user.name" height="40" 
									v-bind="attrs" 
									v-on="on">
									<span class="text-body-2 pr-3">{{ user.name }} - {{randomNum}}</span>
									<div class="text-caption d-flex flex-row align-center justify-center grey rounded-circle">
										<v-icon small color="white" class="pa-2">mdi-account</v-icon>
									</div>
								</v-btn>
							</template>
							<!-- <v-list dense class="">
								<v-list-item v-if="user.level == 'Admin'" v-on:click="menuLink('/admin')">
									<v-list-item-icon>
										<v-icon>mdi-account-multiple</v-icon>
									</v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title>Admin Akun</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-icon>
										<v-icon>mdi-logout</v-icon>
									</v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title>Log Out</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</v-list> -->
						</v-menu>
					</div>
				</div>
			<!-- Display nav for mobile users -->
			<div 
				style="position: fixed; width:100vw; bottom:0; z-index:9000; border-top:1px solid; border-color:rgb(200,200,200,0.15);" 
				class="d-flex d-md-none"
			>
				<v-tabs
					v-if="user.name" 
					background-color="transparent"
					color="primary"
					centered
					height="55px"
					icons-and-text
					center-active 
					show-arrows
					:value="drawer"
					v-model="currentNav"
				>
					<v-tab
						v-for="item in menu"
						:key="item.index"
						:transition="false" :reverse-transition="false"
						@click="menuLink(item.link, item.hueRotate)"
						class="text-capitalize px-0"
						style="font-size:0.7rem; letter-spacing:0.020em; font-weight:300; min-width:70px;"
					>
						{{ item.title }}
						<v-icon>{{item.icon}}</v-icon>
					</v-tab>
				</v-tabs>
				<v-tabs
					v-if="!user.name"
					background-color="grey lighten-4"
					color="primary"
					centered
					height="55px"
					icons-and-text
					center-active 
					show-arrows
					:value="drawer"
				>
					<v-tab
						:transition="false" :reverse-transition="false"
						@click="menuLink(item.link, 0)"
						class="text-capitalize px-0"
						style="font-size:0.7rem; letter-spacing:0.020em; font-weight:300; min-width:70px;"
					>
						Login
						<v-icon>mdi-account</v-icon>
					</v-tab>
				</v-tabs>
			</div>
			<div 
				style="position: fixed; width:100vw; bottom:0; z-index:9000; height:55px; border-top:1px solid; border-color:rgb(200,200,200,0.1); background-color:rgb(200,200,200,0);" 
				class="d-none d-md-flex flex-row align-end justify-space-between"
			>
				<span class="text-body-2 pa-4 grey--text text-darken-1">Site Design / System @{{new Date().getFullYear()}}</span>
			</div>

			<v-navigation-drawer 
				v-model="drawer" app floating permanent 
				class="transparent d-none d-md-flex" width="210" 
				style="height:calc(100vh - 55px - 55px); border-right:1px solid; border-color:rgb(200,200,200,0.1); margin-top:55px;"
				v-if="user.name"
			>
				<v-list dense shaped nav class="px-0 pt-4">
					<nav :class="{toolbar: (!$route.path.includes('admin') && !$route.path.includes('login'))}">
						<v-list-item
							v-for="item in menu"
							:key="item.index"
							link
							:class="($route.path == item.link) ? 'primary' : ''"
							@click="menuLink(item.link, item.hueRotate)"
						>
							<v-list-item-icon class="ml-2 mr-6">
								<v-icon :class="($route.path == item.link) ? 'white--text' : ''">{{item.icon}}</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-left">
								<v-list-item-title :class="($route.path == item.link) ? 'white--text' : ''">{{item.title}}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</nav>
				</v-list>
			</v-navigation-drawer>
			<v-container fluid style="margin-top:67px;" v-if="user.name">
				<v-row>
					<v-col
						style="height:calc(100vh - 55px - 55px); z-index:9000;"
						:style="[$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? {'margin-left':'0px'}:{'margin-left':'220px'}]"
						class=""
					>
						<div class="py-0 px-2 d-flex flex-row" style="width:300px;">
							<span class="text-overline">Slide Me:</span>
							<v-slider
								dense
								max="360"
								min="0"
								v-model="hueRotate"
								class="px-2"
								hide-details
							></v-slider>
						</div>
						<transition name="slide-fade" mode="out-in">
							<router-view
								class=""
								style=""
								@getSnackbar="getSnackbar"
								:user="user"
							/>
						</transition>
					</v-col>
					<v-col 
						cols="12" sm="10" md="5"
						class="pa-0"
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'margin-right:19%;' : 'margin-right:7%;'"
						:class="$vuetify.breakpoint.xs ? 'mobile-size-fix' : ''"
						style="position:absolute; bottom:0; right:0; z-index:1000;"
					>
						<v-img
							eager
							class="scale-up-center"
							src="character.webp"
						>
							<template v-slot:placeholder>
								<v-row
									class="fill-height ma-0"
									align="center"
									justify="center"
								>
									<v-progress-circular
									indeterminate
									color="grey lighten-5"
									></v-progress-circular>
								</v-row>
							</template>
						</v-img>
						<v-img
							eager
							width="10"
							style="position:absolute; right:22%; top:33%;"
							class="vibrate"

							src="eyeglow.webp"
						/>
						<v-img
							eager
							width="10"
							style="position:absolute; right:42%; top:35%;"
							class="vibrate"

							src="eyeglow.webp"
						/>
						<v-img
							eager
							width="52%"
							style="position:absolute; right:10%; top:33%;"
							class="scale-up-center"
							:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"

							src="glow.webp"
						/>
					</v-col>
				</v-row>
			</v-container>
			<login
				:user="user"
			/>
			<v-snackbar
				light
				v-model="snackbar.active"
				rounded="pill"
				timeout="2000"
				width="100"
				style="margin-bottom:60px;"
				>
				<v-icon>mdi-alert-circle-outline</v-icon>
				{{ snackbar.error ? snackbar.error : 'Berhasil' }}

				<template v-slot:action="{ attrs }">
					<v-btn
						color="primary"
						text
						v-bind="attrs"
						@click="snackbar.active = false"
					>
					Close
					</v-btn>
				</template>
			</v-snackbar>
		</div>
    </v-app>
</template>

<script>
// import Cookies from 'js-cookie';
import login from './components/login.vue'

export default {
	components: {
		login
	},
    data(){
        return{
			permanent: true,
			expandUser: false,
			drawer: null,
			user: {name:"Guest", level:"User"},
            menu: [
				{
					title: 'Home',
					icon: 'mdi-view-dashboard',
					link: '/',
					hueRotate: 0
				},
				{
					title: 'Skill',
					icon: 'mdi-hammer-screwdriver',
					link: '/skills',
					hueRotate: 120
				},
				{
					title: 'Projects',
					icon: 'mdi-application',
					link: '/projects',
					hueRotate: 240
				},
			],
			hueRotate: 0,
			snackbar: {
				active: false,
				error: '',
			},
		}
	},
	mounted(){
	},
    methods: {
		menuLink (link, hue) {
			if (this.$route.path != link) {
				this.$router.push({path: link})
				this.hueRotate = hue
			}
		},
		drawervalue (value) {
			this.drawer = value
		},
		getSnackbar (error, type) {
			this.snackbar.active = false
			this.snackbar.error = error
			this.snackbar.color = type
		},
	},
	computed: {
		currentNav: {
			get(){
				return this.menu.findIndex((element) => element.link == this.$route.path)
			},
			set(newName){
				return newName
			} 
		},
		randomNum: function() {
			return Math.floor(Math.random() * 999) + 51;
		}
	}
}
</script>

<style>
	.footer{
		font-size: 12px;
		position: fixed;
		bottom: 10px;
		right: 50px;
	}
	@keyframes blur {
		from {
			filter: blur(0px);
			-webkit-filter: blur(0px);
		}
		to {
			filter: blur(8px);
			-webkit-filter: blur(8px);
		}
	}
	.brightness {
	-webkit-animation: brightness 4s both infinite;
			animation: brightness 4s both infinite;
	}
	@keyframes brightness {
		0%,
		93%,
		100% {
			filter:brightness(100%);
			-webkit-filter: brightness(100%);
		}
		90%,
		96% {
			filter:brightness(120%);
			-webkit-filter: brightness(120%);
		}
	}

	.scale-up-center {
		-webkit-animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) alternate infinite;
		animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) alternate infinite;
	}
	@-webkit-keyframes scale-up-center {
		0% {
			-webkit-transform: scale(1);
					transform: scale(1);
		}
		100% {
			-webkit-transform: scale(1.003, 1.005);
					transform: scale(1.003, 1.005);
		}
	}
	@keyframes scale-up-center {
		0% {
			-webkit-transform: scale(1);
					transform: scale(1);
		}
		100% {
			-webkit-transform: scale(1.005, 1.01);
					transform: scale(1.005, 1.01);
		}
	}
	.vibrate {
	-webkit-animation: vibrate 0.3s linear infinite both;
			animation: vibrate 0.3s linear infinite both;
	}
	@keyframes vibrate {
	0% {
		-webkit-transform: translate(0);
				transform: translate(0);
	}
	20% {
		-webkit-transform: translate(0, 1px);
				transform: translate(0, 1px);
	}
	40% {
		-webkit-transform: translate(0, 0);
				transform: translate(0, 0);
	}
	60% {
		-webkit-transform: translate(1px, 1px);
				transform: translate(1px, 1px);
	}
	80% {
		-webkit-transform: translate(1px, 0);
				transform: translate(1px, 0);
	}
	100% {
		-webkit-transform: translate(0);
				transform: translate(0);
	}
	}
	@-webkit-keyframes vibrate {
	0% {
		-webkit-transform: translate(0);
				transform: translate(0);
	}
	20% {
		-webkit-transform: translate(0, 1px);
				transform: translate(0, 1px);
	}
	40% {
		-webkit-transform: translate(0, 0);
				transform: translate(0, 0);
	}
	60% {
		-webkit-transform: translate(1px, 1px);
				transform: translate(1px, 1px);
	}
	80% {
		-webkit-transform: translate(1px, 0);
				transform: translate(1px, 0);
	}
	100% {
		-webkit-transform: translate(0);
				transform: translate(0);
	}
	}

	.mobile-size-fix{
		-webkit-transform: scale(1.3);
				transform: scale(1.3);
		-webkit-transform-origin: 77% 100%;
				transform-origin: 77% 100%;
	}
	.slide-fade-enter-active {
		transition: all .2s ease;
	}
	.slide-fade-leave-active {
		transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateY(10px);
		opacity: 0;
	}




	/* .fixed-tabs-bar .v-tabs__bar {
		position: -webkit-sticky;
		position: sticky;
		top: 4rem;
		z-index: 2;
	} */
</style>
