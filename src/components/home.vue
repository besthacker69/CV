<template>
	<div>
		<div
			style="background:url('./build/back.jpg') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover; 
			background-attachment:fixed;"
		>
			<v-container>
				<v-row
					id="home"
					class="d-flex align-end justify-space-between brightness" 
					:style="$vuetify.breakpoint.xs ? 'min-height:600px;':'min-height:750px;'"
					style="padding-top:45px;"
				>
					<v-col
						cols="12"
						class="pa-0 d-flex flex-column justify-space-between align-center"
					>
						<div class="py-8 px-2 d-flex flex-column align-center justify-center text-center" >
							<h4 
								:style="$vuetify.breakpoint.xs ? 'font-size:16px;' : 'font-size:20px;'"
								:class="$vuetify.breakpoint.xs ? 'pt-4':'pt-8 pb-0'"
							>
								Ken Welly
							</h4>
							<h1 :style="$vuetify.breakpoint.xs ? 'font-size:30px; font-weight:600;' : 'font-size:50px;'">
								Web and Illustration.
							</h1>
							<h6 
								class="pt-0 pb-2"
								:style="$vuetify.breakpoint.xs ? 'font-size:12px; font-weight:400;' : 'font-size:14px; font-weight:400;'"
							>
									Web Development, Vue.js and Laravel.
								<br class="mb-1">
									Designer, Illustrator and Animator.
							</h6>
						</div>
					</v-col>
					<v-col
						cols="12"
						class="pa-0 d-flex flex-column justify-space-between align-center"
					>
						<v-img
							eager
							src="./build/character.png"
							style="transform: translate(-50px,0%);"
							:contain="!$vuetify.breakpoint.xs"
							:max-height="$vuetify.breakpoint.xs ? '400' : '470'"
							:min-height="$vuetify.breakpoint.xs ? '380' : '450'"
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
							:max-height="$vuetify.breakpoint.xs ? '420' : '470'"
							:min-height="$vuetify.breakpoint.xs ? '400' : '450'"
							src="./build/glow.png"
						/>
					</v-col>
				</v-row>
			</v-container>
			<div
				style="background:url('./sign.png') right; 
					-o-background-size: cover; -moz-background-size: cover;
					-webkit-background-size:cover; background-size: cover;"
			>
				<v-container>
					<v-row 
						id="web"
						class="dark d-flex align-center justify-center" 
						style="overflow:hidden"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-2'"
					>
						<v-col 
							cols="12"
							class="light" 
							:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
						>
							<div class="px-2 d-flex flex-column align-center justify-center">
								<h1 class=" text-center pt-8" :style="$vuetify.breakpoint.xs ? 'font-size:32px;' : 'font-size:48px;'">Web Development</h1>
								<span class=" text-center pb-8" style="font-size:14px;">
									Vue.js. Vuetify, Axios, Laravel, Javascript, PHP, Bootstrap, HTML and CSS.
								</span>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</div>
		<v-container>
			<!-- <v-row 
				class="white d-flex align-center justify-center" 
				style="overflow:hidden"
				:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-2'"
			>
				<v-col 
					cols="12"
					sm="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div 
						class="grey lighten-4 black--text d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden;"
					>
						<div class="d-flex flex-column align-center justify-center py-8">
							<h1 class="text-center pt-12 pb-4" style="font-size:30px;">Web Development Projects</h1>
							
							<span class="text-center pb-2" style="font-size:16px; max-width:300px;">
								Vue.js. Vuetify, Laravel, Native Javascript, PHP, HTML and CSS.
							</span>
							<span>
								<a class="blue--text text--darken-1">View Projects</a>
							</span>
						</div>
						<v-img
							eager
							:contain="!$vuetify.breakpoint.xs"
							src="3.png"
							:max-height="$vuetify.breakpoint.xs ? '400' : '470'"
							:min-height="$vuetify.breakpoint.xs ? '380' : '450'"
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
					</div>
				</v-col>
				<v-col
					cols="12"
					sm="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div 
						class="black white--text d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden"
					>
						<div class="d-flex flex-column align-center justify-center py-8">
							<h1 class="text-center pt-12 pb-4" style="font-size:30px;">Design, Painting and Animation</h1>
							
							<span class="text-center pb-2" style="font-size:16px; max-width:300px;">
								Adobe Photoshop, After Effects, Premiere, Indesign, Blender, Zbrush.
							</span>
							<span>
								<a class="blue--text text--darken-1">View Illustration</a>
							</span>
						</div>
						<v-img
							eager
							:contain="!$vuetify.breakpoint.xs"
							src="6.png"
							:max-height="$vuetify.breakpoint.xs ? '400' : '470'"
							:min-height="$vuetify.breakpoint.xs ? '380' : '450'"
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
					</div>
				</v-col>
			</v-row> -->
			<!-- <v-row 
				class="white d-flex align-center justify-center" 
			>
				<v-col
					cols="12"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
					:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'min-height:70px;':'min-height:90px;'"

				>
					<h2 class="text-center black--text pa-4" :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:36px; font-weight:500;':'font-size:48px; font-weight:500;'">Web Projects</h2>

				</v-col>
			</v-row> -->
			<v-row 
				class="white black--text d-flex align-center justify-center" 
				style="overflow:hidden"
				:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-2'"
			>
				<v-col 
					cols="12"
					md="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div 
						class="grey lighten-5 px-2 d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden;"
					>
						<div class="d-flex flex-column align-center justify-center pt-6 pb-2">
							<h1 class="text-center pt-8 pb-0" style="font-size:36px;">PNC Property</h1>
							<span class="text-center pb-2" style="font-size:15px; max-width:300px;">
								Full-Stack Developer
							</span>
							<span class="text-center pb-4" style="font-size:12px; max-width:300px;">
								Vue.js. Vuetify, Axios , Laravel, Javascript, PHP, HTML and CSS.
							</span>
							<ul style="font-size:15px; max-width:300px;">
								<li>Private property management.</li>
								<li>Property details and Maps location.</li>
								<li>PDF copies of important documents.</li>
								<li>Rent tracking system.</li>
							</ul>
							<span>
								<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
							</span>
						</div>
						<v-img
							eager
							contain
							src="./build/pnc_banner.png"
							class="mb-12"
							:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '330'"
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
					</div>
				</v-col>
				<v-col 
					cols="12"
					md="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div 
						class="grey lighten-5 px-2 d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
					>
						<div class="d-flex flex-column align-center justify-center pt-6 pb-4">
							<h1 class="text-center pt-8 pb-0" style="font-size:36px;">Puan Botanicals</h1>

							<span class="text-center pb-2" style="font-size:15px; max-width:300px;">
								Front-End Developer
							</span>
							
							<span class="text-center pb-4" style="font-size:12px; max-width:300px;">
								Vue.js. Vuetify, Axios , Javascript, PHP, HTML and CSS.
							</span>
							
							<ul style="font-size:16px; max-width:300px;">
								<li>Online kratom store.</li>
								<li>Product lists and cart.</li>
								<li>Shipping and checkout.</li>
							</ul>
							<span>
								<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
							</span>
						</div>
						<v-img
							eager
							contain
							src="./build/puan_banner.png"
							class="mb-12"
							:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '330'"
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
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row 
				class="white black--text d-flex align-center justify-center" 
				style="overflow:hidden"
				:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-2 pt-0'"
			>
				<v-col 
					cols="12"
					md="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<!-- <div 
						class="black white--text d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden;"
					>
						<div class="d-flex flex-column align-center justify-center pt-6 pb-4">
							<h1 class="text-center pt-12 pb-0" style="font-size:30px;">Interactive Gallery</h1>
							
							<span class="text-center pb-4" style="font-size:12px; max-width:300px;">
								Vue.js. Vuetify, Axios , Javascript, PHP, HTML and CSS.
							</span>
							
							<ul class="pb-2" style="font-size:16px; max-width:300px;">
								<li>Interactive animating using CSS and Web Technologies.</li>
							</ul>
							<span>
								<a class="blue--text text--darken-1">Visit Interactive Gallery</a>
							</span>
						</div>
						<v-img
							eager
							contain
							src="puan_banner.png"
							class="mb-12"
							:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '330'"
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
					</div> -->
					<div 
						class="grey lighten-5 px-2 transparent d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden;"
					>
						<div class="d-flex flex-column align-center justify-center pt-6 pb-4">
							<h1 class="text-center pt-8 pb-0" style="font-size:36px;">CM ACC</h1>
							<span class="text-center pb-2" style="font-size:15px; max-width:300px;">
								Front-End Developer, Product Designer
							</span>
							
							<span class="text-center pb-4" style="font-size:12px; max-width:300px;">
								Vue.js. Vuetify, Axios , Javascript, PHP, HTML and CSS.
							</span>
							
							<ul class="pb-2" style="font-size:16px; max-width:300px;">
								<li>Accounting Software.</li>
								<li>Product purchasing, sales and return.</li>
								<li>Cash, debt and receivables.</li>
							</ul>
							<span>
								<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
							</span>
						</div>
						<v-img
							eager
							contain
							src="./build/acc_banner.png"
							class="mb-12"
							:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '330'"
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
					</div>
				</v-col>
				<v-col 
					cols="12"
					md="6"
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div 
						class="grey lighten-5 px-2 d-flex flex-column align-center justify-space-between" 
						:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'height:520px;':'height:640px;'"
						style="overflow:hidden;"
					>
						<div class="d-flex flex-column align-center justify-center pt-6 pb-4">
							<h1 class="text-center pt-8 pb-0" style="font-size:36px;">CM Digital</h1>
							<span class="text-center pb-2" style="font-size:15px; max-width:300px;">
								Front-End Developer, Product Designer
							</span>
							
							<span class="text-center pb-4" style="font-size:12px; max-width:300px;">
								Vue.js. Vuetify, Javascript, HTML and CSS.
							</span>
							
							<ul class="pb-2" style="font-size:16px; max-width:300px;">
								<li>Software house.</li>
								<li>Marketing and Advertising purposes.</li>
							</ul>
							<span>
								<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
							</span>
						</div>
						<v-img
							eager
							contain
							src="./build/cmd_banner.png"
							class="mb-12"
							:max-height="$vuetify.breakpoint.xs ? '200' : $vuetify.breakpoint.sm ? '250' : '330'"
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
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<v-row
				id="illustration"
				class="black dark d-flex align-center justify-center" 
				style="overflow:hidden"
				:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-2'"
			>
				<v-col 
					cols="12"
					class=" d-flex flex-column align-center justify-center" 
					:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
				>
					<div class="px-2 d-flex flex-column align-center justify-center">
						<h1 class=" text-center pt-8" :style="$vuetify.breakpoint.xs ? 'font-size:32px;' : 'font-size:48px;'">Illustration</h1>
						<span class=" text-center pb-8 px-2" style="font-size:14px;">
							<!-- Drawing, animation, photo editing, video editing, vector design.  -->
							Photoshop, After Effects, Premiere, Zbrush.
							<!-- Understanding of Color Theory & Psychology, Shape Appeal, Negative Composition.  -->
						</span>
					</div>
				</v-col>
			</v-row>
		</v-container>
		<div 
			style="background:url('./back3.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover; 
			background-attachment:fixed; background-position:top;">
			<v-container>
				<v-row
					class="d-flex align-center" 
					:class="$vuetify.breakpoint.xs ? 'py-0 px-0 flex-row':'pa-2 flex-row-reverse'"
				>
					<v-col 
						cols="12"
						sm="6"
						class="flex-grow-1 grey darken-4"
						:class="$vuetify.breakpoint.xs ? 'pa-0':'pa-3'"
					>
						<div 
							class=" d-flex flex-column align-center justify-center fill-height" 
							style="overflow:hidden;"
							id="gallery-pic"
						>
							<v-img
								eager
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
						:class="$vuetify.breakpoint.xs ? 'py-1 px-2':'pa-1'"
					>
						<div 
							class="d-flex flex-column align-center justify-start grey darken-4" 
							style="overflow:none;"
						>
							<v-row class="py-5 px-2" style="width:100%;">
								<v-col
									v-for="n in 8"
									:key="n"
									class="d-flex child-flex pa-0"
									cols="3"
									md="3"
								>
									<v-hover v-slot="{ hover }">
										<v-img
											:src="`./build/illus_${n}.png`"
											aspect-ratio="1"
											:style="hover ? 'filter: brightness(0.8);':''"
											style="cursor:pointer;"
											v-on:click="gallery_pic = `./build/illus_${n}.png`"
											class="grey lighten-2"
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
		</div>
		<div class="grey darken-4">
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
											Back-End: PHP, Laravel.  
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
							<v-col
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
							</v-col>
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
	props: ['drawer', 'product'],
	data () {
		return {
			gallery_pic: './build/illus_1.png',
			hueRotate: 255,
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