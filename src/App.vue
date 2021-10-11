<template>
    <v-app style="background:none !important;">
		<div>
			<loading :loadingNum='loadingNum' v-if="loadingNum == 19"></loading>
			<div 
				class="d-flex flex-row align-center px-4" 
				style="width:100vw; border-bottom:1px solid; border-color:rgb(200,200,200,0.15); position:fixed; height:45px; z-index:9998;"
				:style="scrollPosition > 50 ? 'background-color:black' : 'background-color:transparent'"
			>	
				<v-app-bar-nav-icon 
					v-if="$vuetify.breakpoint.xs"
					@click="openDialog()"
					:disabled="debounce"
				> <v-icon v-if="dialog == true">mdi-close</v-icon> </v-app-bar-nav-icon>

				<div 
					class="d-flex flex-row px-2" 
					style="cursor:pointer; line-height:1;"
					:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'margin:auto;':''" 
					v-on:click="menuLink('/', '#home')"
				>
					<v-icon class="pr-2">mdi-account-circle</v-icon>
					<div class="d-flex flex-column justify-center align-start">
						<span class="text-center" style="font-size:1rem; font-weight:500;"> CV </span>
						<span
							v-if="!$vuetify.breakpoint.xs"
							class="text-center" 
							style="font-size:0.7rem; font-weight:300;"
						> Portfolio
						</span>
					</div>
				</div>
				<v-tabs
					v-if="!$vuetify.breakpoint.xs"
					background-color="transparent"
					color="grey"
					hide-slider
					right
					height="45px"
					show-arrows
					:value="drawer"
					v-model="currentNav"
					class="px-4"
				>
					<v-tab
						v-for="item in menu"
						:key="item.index"
						@click="menuLink(item.link, item.hash)"
						@mouseover="item.hover = true" 
						@mouseout="item.hover = false" 
						class="text-capitalize px-0"
						style="font-size:0.8rem; letter-spacing:0.020em; font-weight:300; min-width:100px;"
					>
						<span :class="{'white--text': item.hover}">{{ item.title }}</span>
						<!-- <v-icon>{{item.icon}}</v-icon> -->
					</v-tab>
				</v-tabs>
			</div>
			<div>
				<transition name="slide-fade" mode="out-in">
					<router-view
						style=""
						@getSnackbar="getSnackbar"
						:user="user"
						:scrollPosition="scrollPosition"
					/>
				</transition>
			</div>
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
			<v-dialog
				v-if="$vuetify.breakpoint.xs"
				v-model="dialog"
				fullscreen
				hide-overlay
				transition="dialog-top-transition"
				scrollable
			>
				<v-card tile class="black">
				<v-card-text class="px-2">
					<v-list 
						style="padding-top:45px;" 
						class="transparent"
					>
						<v-list-item
							v-for="item in menu"
							:key="item.index"
							@click="menuLink(item.link, item.hash), dialog = false"
							@mouseover="item.hover = true" 
							@mouseout="item.hover = false"
							style="border-bottom:rgb(200,200,200,0.15) 1px solid;"
						>
							<v-list-item-content>
							<v-list-item-title class="grey--text text--lighten-2">{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card-text>

				<div style="flex: 1 1 auto;"></div>
				</v-card>
			</v-dialog>
		</div>
    </v-app>
</template>

<script>

import loading from './components/loading.vue'

export default {
	components: {
		loading
	},
    data(){
        return{
			loadingNum: 20,
			scrollPosition: null,
			dialog: false,
			debounce: false,
			permanent: true,
			expandUser: false,
			drawer: null,
			user: {name:"Guest", level:"User"},
            menu: [
				{
					title: 'Home',
					icon: 'mdi-home',
					link: '/',
					hash: '#home',
					hover: false,
				},
				{
					title: 'Web',
					icon: 'mdi-application',
					link: '/',
					hash: '#web',
					hover: false,
				},
				{
					title: 'Illustration',
					icon: 'mdi-brush',
					link: '/',
					hash: '#illustration',
					hover: false,
				},
				{
					title: 'Contact',
					icon: 'mdi-brush',
					link: '/',
					hash: '#contact',
					hover: false,
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
		window.addEventListener('scroll', this.updateScroll);
	},
    methods: {
		openDialog() {
			this.dialog = true
			this.debounce = true;
      
			setTimeout(() => {
				this.debounce = false;
			}, 500);
		},
		updateScroll() {
			this.scrollPosition = window.scrollY
		},
		menuLink (link, hashID) {
			if (this.$route.path != link) {
				this.$router.push({path: link})
			}
			if (hashID) {
				// this.$router.push({path: link, hash: hashID})
				this.$vuetify.goTo(hashID, {offset: 45, easing:'easeInOutCubic'})
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
	.brightness {
	-webkit-animation: brightness 3s both infinite;
			animation: brightness 3s both infinite;
	}
	@keyframes brightness {
		0%,
		65%,
		75%,
		93%,
		100% {
			filter:brightness(90%);
			-webkit-filter: brightness(90%);
		}
		70%,
		90%,
		96% {
			filter:brightness(110%);
			-webkit-filter: brightness(110%);
		}
	}
	.fadeTransition {
	-webkit-animation: fadeTransition 1s both;
			animation: fadeTransition 1s both;
	}
	@keyframes fadeTransition {
		0% {
			filter:fadeTransition(90%);
			-webkit-filter: fadeTransition(90%);
		}
		100% {
			filter:fadeTransition(110%);
			-webkit-filter: fadeTransition(110%);
		}
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
	.fade-enter-active {
		transition: opacity 1s ease-in-out;
	}

	.fade-enter-to {
		opacity: 1;
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-to {
		opacity: 0;
	}
	
	a:hover {
		text-decoration: underline;
	}

	body {
		background-color: black;
		font-family: cursive;
	}
	.glow {
		color: #fff;
		text-align: center;
		text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e60073, 0 0 40px #e60073, 0 0 60px #e60073, 0 0 80px #e60073, 0 0 160px #e60073;
	}
</style>
