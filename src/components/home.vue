<template>
	<div>
		<transition name="fade">
			<div
				style="
				-o-background-size: cover; -moz-background-size: cover;
				-webkit-background-size:cover; background-size: cover; 
				position:fixed; height:100vh; width:100vw; z-index:-1;
				background-position:center center;"
				v-bind:style="{ 'background-image': 'url(' + backImg + ')' }"
				:key="backImg"
			>
				<!-- Temp fix for eager loading image -->
				<div style="background-image: url(./build/back.jpg); visibility:hidden; width:0; height:0;"></div>
				<div style="background-image: url(./build/back3.jpg); visibility:hidden; width:0; height:0;"></div>
				<div style="background-image: url(./build/back4.jpg); visibility:hidden; width:0; height:0;"></div>

			</div>
		</transition>
		<div :style="{'filter': 'hue-rotate('+hueRotate+'deg)'}">
			<vue-particles 
				class="pt-8 brightness"
				color="#ffb8d2" 
				linesColor="#ff47a3" 
				:particlesNumber="70"
				:lineOpacity="0.9"
				:particleOpacity="0.9"
				:particleSize="8"
				style="width:100%; height:600px; position:absolute;"
				:style="$vuetify.breakpoint.xs ? 'margin-top:20px; height:640px;':'margin-top:100px; height:700px;'"
				:hoverEffect="false"
				:clickEffect="false"
			>
			</vue-particles>
		</div>
		<v-container>
			<v-row
				id="home"
				class="d-flex align-end justify-space-between brightness" 
				:style="$vuetify.breakpoint.xs ? 'min-height:660px;':'min-height:800px;'"
				style="padding-top:45px;"
			>
				<v-col
					cols="12"
					class="pa-0 d-flex flex-column justify-space-between align-center"
				>
					<div class="pt-8 pb-4 px-2 d-flex flex-column align-center justify-center text-center" >
						<h4 
							:style="$vuetify.breakpoint.xs ? 'font-size:16px;' : 'font-size:20px;'"
							:class="$vuetify.breakpoint.xs ? 'py-2':'py-2 pb-0'"
						>
							Ken_Welly
						</h4>
						<h1 :style="$vuetify.breakpoint.xs ? 'font-size:48px; font-weight:600; line-height:52px;' : 'font-size:72px; line-height:72px;'">
							Web and Illustration
						</h1>
						<h6 
							class="grey--text text--lighten-2"
							:style="$vuetify.breakpoint.xs ? 'font-size:13px; font-weight:400;' : 'font-size:16px; font-weight:400;'"
						>
							Web Developer - Full Stack, Concept Artist.
						</h6>
					</div>
				</v-col>
				<v-col
					cols="12"
					class="pa-0 d-flex flex-column justify-space-between align-center"
				>
					<v-img
						eager
						@load="loadingNum + 12"
						src="./build/character.png"
						style="transform: translate(-50px,0%)"
						:contain="!$vuetify.breakpoint.xs"
						:max-height="$vuetify.breakpoint.xs ? '420' : '490'"
						:min-height="$vuetify.breakpoint.xs ? '400' : '470'"
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
						style="position:absolute; transform: translate(-50px,0%);"
						:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"
						class="fadeTransition"
						:contain="!$vuetify.breakpoint.xs"
						:max-height="$vuetify.breakpoint.xs ? '420' : '490'"
						:min-height="$vuetify.breakpoint.xs ? '400' : '470'"
						src="./build/glow.png"
					/>
				</v-col>
			</v-row>
		</v-container>
		<div class="black brightness">
			<v-container>
				<v-row
					class="white--text d-flex align-center justify-center"
					:class="$vuetify.breakpoint.xs ? 'pa-0':'pa-4'"
				>
					<v-col
						:class="$vuetify.breakpoint.xs ? 'pt-8 pb-0':'pa-4'"
						style="max-width:500px;"
						cols="12"
						sm="6"
						md="5"
					>
						<div :class="$vuetify.breakpoint.xs ? 'pt-4 px-4': $vuetify.breakpoint.sm ? 'pt-6': 'pa-8' ">
							<span class="text-h4">Summary</span>
							<v-divider style="border-color:white;"/>
							<p class="text-caption pa-4 ma-0">Full-stack Web Developer with a background in Concept design and Finance.</p>
							
							<span class="text-h4">Skills</span>
							<v-divider style="border-color:white;"/>
							<ul 
								class=" text-caption"
								:class="$vuetify.breakpoint.xs ? 'pt-4 px-4': 'pa-4'"
							>
								<li>
									Front-End: HTML, CSS, Javascript, Vue.js, Vuetify, Axios, Vue router, Wordpress.
								</li>
								<li>
									Back-End: PHP, MySQL, Laravel.
								</li>
								<li>
									Design & Illustration: Photoshop, Indesign. CorelDraw.
								</li>
								<li>
									3D Design: ZBrush, Blender.
								</li>
								<li>
									Video & Animation: After Effects, Premiere.
								</li>
								<li>
									Finance: Bachelor of management economics, Experience as a Credit Analyst - interview and survey of prospective clients, Risk Management, Debt Collecting, and creating WebApp for documentation and reports.
								</li>
								<li>
									Language: Native Indonesian, English, Basic Japanese.
								</li>
							</ul>
						</div>
					</v-col>
					<v-col
						cols="12"
						sm="6"
						md="5"
						class="pa-0"
					>
						<v-img
							eager
							@load="loadingNum + 12"
							src="./build/cv.png"
							contain
							:max-height="$vuetify.breakpoint.xs ? '' : '490'"
							:min-height="$vuetify.breakpoint.xs ? '' : '470'"
						>
						</v-img>
					</v-col>
				</v-row>
			</v-container>
		</div>
		<div class="brightness">
			<v-img
				id="web"
				eager
				src="./build/div.png" height="250" 
				class="fadeTransition"
				:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"
			>
				<v-img 
					eager 
					contain 
					src="./build/web_sign.png" 
					height="200" 
					class="mt-8"
				>
				</v-img>
			</v-img>
		</div>

		<!-- <v-img eager src="./build/back2.jpg" height="250" class="d-flex flex-row align-center justufy-center">
			<v-container>
				<v-row 
					id="web"
					class="dark d-flex align-center justify-center pt-4 pb-8" 
					style="overflow:hidden"
				>
					<v-col 
						cols="12"
						class="d-flex flex-column align-center justify-center"
						:class="$vuetify.breakpoint.xs ? 'py-6 px-0':'pa-4'"
					>
						<div 
							class="pa-0 d-flex flex-column align-center justify-center fadeTransition"
						>
							<h1 
								class="text-center pa-2 glow brightness" 
								style="font-family:cursive; letter-spacing:-0.060em; font-weight:300; font-style:italic;"
								:style="$vuetify.breakpoint.xs ? 'font-size:52px; line-height:56px;' : 'font-size:72px; line-height:96px;'"
							>Web Development</h1>
							<span 
								class="text-center glow brightness px-2" 
								:style="$vuetify.breakpoint.xs ? 'font-size:14px;' : 'font-size:15px;'"
							>
								Vue.js. Vuetify, Axios, Laravel, Javascript, PHP, Bootstrap, HTML and CSS.
							</span>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-img> -->

			<v-container class="brightness">
				<v-row 
					class="white--text d-flex align-center justify-center" 
					style="overflow:hidden"
					:class="$vuetify.breakpoint.xs ? 'py-12 px-0':'pa-2'"
					:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'min-height:1080px;':'min-height:900px;'"
				>
					<v-col 
						cols="12"
						md="5"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
						
					>
						<v-card
							class="mx-auto pa-4"
							color="transparent"
							max-width="500"
						>
							<div style="border-left:8px double white;">
								<v-list dense flat shaped color="transparent">
									<v-list-item-group
										v-model="model"
										active-class="white black--text"
										mandatory
									>
										<template v-for="(item, i) in items">
											<v-divider
												v-if="!item"
												:key="`divider-${i}`"
											></v-divider>

											<v-list-item
												v-else
												:key="`item-${i}`"
												:value="item"
												style="background-color:rgba(0,0,0,0.7)"
											>
												<template>
													<v-list-item-icon>
														<v-icon>mdi-{{item.icon}}</v-icon>
													</v-list-item-icon>
													<v-list-item-content>
														<v-list-item-title v-text="item.name"></v-list-item-title>
														<v-list-item-subtitle v-text="item.subtitle" class="text-caption grey--text text--darken-1"></v-list-item-subtitle>
													</v-list-item-content>
												</template>
											</v-list-item>
										</template>
									</v-list-item-group>
								</v-list>
							</div>
						</v-card>
					</v-col>
					<v-col 
						cols="12"
						md="6"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
					>
						<transition name="slide-fade" mode="out-in">
							<div 
								class="px-2 d-flex flex-column align-center justify-center" 
								style="overflow:hidden;"
								:key="model.name"
							>
								<v-img
									eager
									contain
									:src="`./build/${model.img}`"
									class="mb-4"
									:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '300'"
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

								<v-card
									dark
									class="white--text d-flex flex-column align-center justify-center pa-4 rounded-lg"
									style="width:90%;"
								>
									<v-card-title>{{model.name}}</v-card-title>
									<v-card-subtitle class="text-caption text-center">
										{{model.role}} - {{model.subtitle}}
									</v-card-subtitle>
									<!-- <span class="text-center pb-4" style="font-size:12px; max-width:300px;">
										Vue.js. Vuetify, Axios , Laravel, Javascript, PHP, HTML and CSS.
									</span> -->
									<v-divider style="width:100%;"></v-divider>
									<div 
										class='mb-2' 
										style="overflow: auto;"
										:style="$vuetify.breakpoint.xs ? 'max-height:300px;': 'max-height:300px;'"
									>
										<v-card-text class="text-subtitle-2">
											{{model.desc}}
										</v-card-text>
										<v-card-text>
											<ul class="pb-8">
												<li 
													v-for="(item, i) in model.feature"
													v-bind:key="i"
												>
													{{ item }}
												</li>
											</ul>
										</v-card-text>
									</div>
									<span>
										<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
									</span>
								</v-card>
							</div>
						</transition>
					</v-col>
				</v-row>
			</v-container>

		<div class="brightness">
			<v-img 
				eager
				src="./build/div.png" height="250" 
				class="fadeTransition"
				:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"
			>
				<v-img 
					id="illustration"
					eager 
					contain 
					src="./build/illus_sign.png" height="200" 
					class="mt-8"
				>
				</v-img>
			</v-img>
		</div>
		<!-- <v-img eager src="./build/back2.jpg" height="250" class="d-flex flex-row align-center justufy-center">
			<v-container>
				<v-row
					id="illustration"
					class="dark d-flex align-center justify-center pt-4 pb-8" 
					style="overflow:hidden"
				>
					<v-col 
						cols="12"
						class="d-flex flex-column align-center justify-center" 
						:class="$vuetify.breakpoint.xs ? 'py-6 px-0':'pa-4'"
					>
						<div 
							class="pa-2 d-flex flex-column align-center justify-center fadeTransition"
							:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"
						>
							<h1 
								class="text-center pa-2 glow brightness" 
								:style="$vuetify.breakpoint.xs ? 'font-size:52px; line-height:52px;' : 'font-size:72px; line-height:72px;'"
								style="font-family:cursive; letter-spacing:-0.06em; font-weight:300; font-style:italic;"
							>Illustration</h1>
							<span 
								class=" text-center glow brightness px-2" 
								:style="$vuetify.breakpoint.xs ? 'font-size:14px;' : 'font-size:15px;'"
							>
								Photoshop, After Effects, Premiere, Zbrush.
							</span>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-img> -->
			<v-container>
				<v-row
					class="d-flex align-center" 
					:class="$vuetify.breakpoint.xs ? 'py-2 px-0 flex-row':'pa-2 flex-row-reverse'"
					:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'min-height:720px;':'min-height:900px;'"
				>
					<v-col 
						cols="12"
						sm="6"
						class="flex-grow-1"
						:class="$vuetify.breakpoint.xs ? 'pa-0':'pa-4'"
					>
						<div 
							class="grey darken-4 d-flex flex-column align-center justify-center fill-height pa-2" 
							style="overflow:hidden;"
							id="gallery-pic"
						>
							<v-img
								contain
								:src="gallery_pic"
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
							<v-spacer class="flex-grow-1"/>
						</div>
					</v-col>
					<v-col 
						cols="12"
						sm="6"
						class="fill-height my-8"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-2':'pa-4'"
					>
						<div 
							class="grey darken-4 d-flex flex-column align-center justify-start" 
							style="overflow:none;"
						>
							<v-row class="py-5 px-2" style="width:100%;">
								<v-col
									v-for="n in 11"
									:key="n"
									class="d-flex child-flex pa-0 flex-column-reverse"
									cols="3"
									md="3"
								>
									<v-hover v-slot="{ hover }">
										<v-img
											:src="`./build/illus_${12-n}.jpg`"
											aspect-ratio="1"
											:style="hover ? 'filter: brightness(0.8);':''"
											style="cursor:pointer;"
											v-on:click="gallery_pic = `./build/illus_${12-n}.jpg`"
											class="grey darken-4"
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
									</v-hover>
								</v-col>
							</v-row>
						</div>
					</v-col>
				</v-row>
			</v-container>
		<div class="grey darken-4" style="z-index:1;">
			<v-container>
				<v-row
					id="contact"
					class="grey white--text darken-4 d-flex flex-column align-start justify-center py-4" 
					style="min-height:250px; overflow:hidden"
				>
					<!-- <div class="d-flex flex-row align-center justify-start" :class="$vuetify.breakpoint.xs ? 'px-4':'px-10'" cols="12" style="width:100%;">
						<v-img src="./build/photo.jpg" width="60" max-width="60" max-height="60" height="60" class="rounded-circle mx-4"/>
						<span style="width:200px; border-bottom:1px solid #dadce0;" class="px-2 pb-1">Ken Welly</span>
						<v-divider/>
					</div> -->
					<v-container>
						<v-row :class="$vuetify.breakpoint.xs ? 'px-4':'px-10'">
							<v-col
								cols="12"
								sm="6"
								class="px-4"
							>
								<div class="d-flex flex-column align-start justify-start"  cols="12">
									<span class="pa-2">Tools And Technologies</span>
									<ul style="font-size:14px;" class="grey--text">
										<li>
											Front-End: HTML, CSS, Javascript, Vue.js, Vuetify, Axios, Vue router, Wordpress.
										</li>
										<li>
											Back-End: PHP, MySQL, Laravel.  
										</li>
										<li>
											Design & Illustration: Photoshop, Indesign. CorelDraw.
										</li>
										<li>
											3D Design: ZBrush, Blender.
										</li>
										<li>
											Video & Animation: After Effects, Premiere.
										</li>
									</ul>
								</div>
							</v-col>
							<!-- <v-col
								cols="12"
								sm="6"
								class="pb-2 pt-0 px-4"
							>
								<div class="d-flex flex-column align-start justify-start py-1"  cols="12">
									<span class="pa-2">Additional Information</span>
									<ul style="font-size:14px;" class="grey--text">
										<li>
											Indonesian, English, basic Japanese.
										</li>
										<li>
											Experience in freelance and startup.
										</li>
										<li>
											Bachelor of economy management.
										</li>
									</ul>
								</div>
							</v-col> -->
						</v-row>
					</v-container>
					<v-container>
						<v-row>
							<v-col class="d-flex flex-column">
								<span :class="$vuetify.breakpoint.xs ? 'px-4':'px-10'" class="grey--text text--lighten-1 pb-1" style="font-size:14px; border-bottom:1px solid rgb(67, 69, 72); width:100%;"> 
									Contact : Email <a href="mailto:kenwellymoe@gmail.com">kenwellymoe@gmail.com</a> or <span style="white-space: nowrap;">Phone +62 897 123 6119</span> 
								</span>
								<span :class="$vuetify.breakpoint.xs ? 'px-4':'px-10'" class="grey--text" style="font-size:12px;"> 
									UTC/GMT+07:00 Indonesia  
								</span>
							</v-col>
						</v-row>
					</v-container>
				</v-row>
			</v-container>
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},
	props: ['user', 'scrollPosition'],
	data () {
		return {
			backImg: './build/back.jpg',
			gallery_pic: './build/illus_10.jpg',
			hueRotate: 255,
			items: [
				{
					name:'CV',
					img:'cv_banner.png',
					icon:'heart',
					role:'Product Designer',
					subtitle: 'Exploring Front-end Technologies.',
					desc:'A Cyberpunk themed portofolio. A simple scalable web to showcase my works.',
					feature: [
						'Mobile friendly and couple of cross browser compatibility workarounds.',
						'Subtle CSS effects and neon lights are color coded using JS.',
						'Compressed resource, effects and assets. to ensure it can run smoother on low end devices.',
					],
				},
				{
					name:'PNC Property',
					img:'pnc_banner.png',
					icon:'home',
					role: 'Full-Stack Developer',
					subtitle: 'Private property database management.',
					desc:'Property documentation webapp for keeping track records of data and scanned documents, where data privacy is of the utmost importance.',
					feature: [
						'Databases of users and their log tracks.',
						'Information is stored privately.',
						'Active rent tracking system, and historic records.',
						'Copies of important documents on each record stored as images and PDF',
					]
				},
				{
					name:'CM ACC',
					img:'acc_banner.png',
					icon:'calculator',
					role: 'Front-End Developer, Product Designer',
					subtitle: 'Accounting Software (SaaS).',
					desc:'A custom App intended for a poultry feeds SMEs (Small and Medium Enterprises), since the accounting flow only fits a certain niche. Team decided to repurpose it into a general accounting app.',
					feature: [
						'Classic Standardized Admin SPA UI for easier experience.',
						'Product purchasing, sales and return.',
						'Cash, debt and receivables.',
						'Changes in product quantity and other data are connected, making user workflows faster and error free.'
					]
				},
				{
					name:'Puan Botanicals',
					img:'puan_banner.png',
					icon:'leaf-maple',
					role: 'Front-End Developer',
					subtitle: 'Kratom commerce page.',
					desc:'A simple e-commerce page to sell client`s locally grown herbs.',
					feature: [
						'Flat design on home and product description',
						'Material Design Product list and cart drawer.',
						'Cart, Shipping and checkout APIs which sent directly on admin dashboard.',
					]
				},
				{
					name:'CM Digital',
					img:'cmd_banner.png',
					icon:'coffee',
					role: 'Front-End Developer, Product Designer',
					subtitle: 'Software house.',
					desc:'A landing homepage for digital agency and software house, run by team of developers with my role as product designer and front-end engineer.',
					feature: [
						'Coffee Shop theme for a professional but relaxed experience.',
						'Work In Progress.'
					]
				}
			],
			model: ['Carrots'],
			// days: '',
			// hours: '',
			// minutes: '',
			// seconds: '',
			// milis: '',
			// randomInterval: '1000'

		}
	},
	mounted () {
		setInterval(() => {
			if (this.hueRotate > 500) {
				this.hueRotate = 0;
			}
			this.hueRotate += 50;
			
		}, 1000);
	},
	methods: {
		scrollSnapGallery() {
			if (this.$vuetify.breakpoint.xs) {
				this.$vuetify.goTo('#gallery-pic', {offset: 45, easing:'easeInOutCubic'})
			}
		},
		clickCharacter() {
			this.hueRotate = 50;
		},
		// timerCount () {
		// 	var countDownDate = new Date("Jan 1, 2992 00:00:00").getTime();
		// 	var now = new Date().getTime();
		// 	var dist = countDownDate - now;
		// 	this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
		// 	this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		// 	this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
		// 	this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
		// 	var milisCount = Math.floor((dist % (1000 * 60) /100))
		// 	this.milis = milisCount.toString().slice(-1);
		// },
		logout () {
			// this.$cookies.remove('password')
			// this.$cookies.remove('email')
			// this.$router.push({path: '/login'})
		}
	},
	watch: {
		scrollPosition: function (val) {
			if (this.$vuetify.breakpoint.xs) {
				if (val < 1300) {
				this.backImg = './build/back.jpg'
				} else if (val < 2700) {
					this.backImg = './build/back4.jpg'
				} else {
					this.backImg = './build/back3.jpg'
				}
			} else if (this.$vuetify.breakpoint.sm) {
				if (val < 900) {
				this.backImg = './build/back.jpg'
				} else if (val < 2300) {
					this.backImg = './build/back4.jpg'
				} else {
					this.backImg = './build/back3.jpg'
				}
			} else {
				if (val < 1100) {
				this.backImg = './build/back.jpg'
				} else if (val < 2300) {
					this.backImg = './build/back4.jpg'
				} else {
					this.backImg = './build/back3.jpg'
				}
			}	
		}
	},
	computed: {
		currentNav: {
			get(){
				return this.menu.findIndex((element) => element.link == this.$route.path)
			},
			set(newName){
				return newName
			} 
		}
	}
}
</script>
<style>
.fadeTransition {
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-ms-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}
</style>