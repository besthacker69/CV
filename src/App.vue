<template>
    <v-app>
		<div
		
		>
			<div 
				class="d-flex flex-row align-center px-4" 
				style="width:100vw; border-bottom:1px solid; border-color:rgb(200,200,200,0.15); position:fixed; height:45px; z-index:9999;"
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
			<!-- <v-container 
				v-if="user.name"
				fluid
			>
				<v-row>
					<v-col
						class=""
					> -->
						<!-- <div class="py-0 px-2 d-flex flex-row" style="width:300px;">
							<span class="text-overline">Slide Me:</span>
							<v-slider
								dense
								max="360"
								min="0"
								v-model="hueRotate"
								class="px-2"
								hide-details
							></v-slider>
						</div> -->
						<transition name="slide-fade" mode="out-in">
							<router-view
								style=""
								@getSnackbar="getSnackbar"
								:user="user"
							/>
						</transition>
					<!-- </v-col>
				</v-row>
			</v-container> -->
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
export default {
	components: {
	},
    data(){
        return{
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
		93%,
		100% {
			filter:brightness(90%);
			-webkit-filter: brightness(90%);
		}
		90%,
		96% {
			filter:brightness(110%);
			-webkit-filter: brightness(110%);
		}
	}
/* 
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
	} */
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
	a:hover {
		text-decoration: underline;
	}
	/* .fixed-tabs-bar .v-tabs__bar {
		position: -webkit-sticky;
		position: sticky;
		top: 4rem;
		z-index: 2;
	} */
</style>
