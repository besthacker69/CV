<template>
	<div>
		<div
			style="background:url('./back.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover; 
			"
		>
			<div :style="{'filter': 'hue-rotate('+hueRotate+'deg)'}">
				<vue-particles 
					color="#ffb8d2" 
					linesColor="#ff47a3" 
					:particlesNumber="60"
					:lineOpacity="0.9"
					:particleOpacity="0.9"
					:particleSize="5"
					style="width:100%; height:600px; position:absolute;"
					:style="$vuetify.breakpoint.xs ? 'margin-top:20px; height:640px;':'margin-top:100px; height:700px;'"
					class="pt-8"
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
								kanna_ken
							</h4>
							<h1 :style="$vuetify.breakpoint.xs ? 'font-size:48px; font-weight:600; line-height:52px;' : 'font-size:72px; line-height:72px;'">
								Web and Illustration
							</h1>
							<!-- <h6 
								class="pt-0 pb-2"
								:style="$vuetify.breakpoint.xs ? 'font-size:12px; font-weight:400;' : 'font-size:14px; font-weight:400;'"
							>
									Web Development, Vue.js and Laravel.
								<br class="mb-1">
									Designer, Illustrator and Animator.
							</h6> -->
							<h6 
								class="grey--text text--lighten-2"
								:style="$vuetify.breakpoint.xs ? 'font-size:13px; font-weight:400;' : 'font-size:16px; font-weight:400;'"
							>
								CG artist and Web developer.
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
		</div>
		
		<div
			style="background:url('./back2.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover;"
		>
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
							:style="{'filter': 'hue-rotate('+hueRotate+'deg)'}"
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
		</div>
		<div
			style="background:url('./back4.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover;"
		>
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
					class="white--text d-flex align-center justify-center brightness" 
					style="overflow:hidden"
					:class="$vuetify.breakpoint.xs ? 'py-12 px-0':'pa-2'"
					:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'min-height:600px;':'min-height:800px;'"
				>
					<v-col 
						cols="12"
						md="6"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
						
					>
						<!-- <v-tabs
							v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
							v-model="model"
							background-color="transparent"
							active-class="white black--text"
							hide-slider
							centered
							dark
							icons-and-text
							style="border-bottom:8px double white;"
						>
							<v-tab 
								v-for="(item, i) in items"
								:key="`divider-${i}`"
								style="border-radius:20px 20px 0 0; text-transform: capitalize;"

							>
								{{item.name}}
								<v-icon large>mdi-{{item.icon}}</v-icon>
							</v-tab>
						</v-tabs> -->
						
						<v-card
							flat
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
											>
												<template>
													<v-list-item-icon>
														<v-icon>mdi-{{item.icon}}</v-icon>
													</v-list-item-icon>
													<v-list-item-content>
														<v-list-item-title v-text="item.name"></v-list-item-title>
														<v-list-item-subtitle v-text="item.desc[0]" class="grey--text text--darken-1"></v-list-item-subtitle>
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
								<div 
									class="white--text d-flex flex-column align-center justify-center pa-4"
									style="width:95%; border-top:8px double white;"
								>
									<h1 class="text-center pt-2 pb-0" style="font-size:36px;">{{model.name}}</h1>
									<span class="text-center pb-2" style="font-size:15px; max-width:300px;">
										{{model.role}}
									</span>
									<!-- <span class="text-center pb-4" style="font-size:12px; max-width:300px;">
										Vue.js. Vuetify, Axios , Laravel, Javascript, PHP, HTML and CSS.
									</span> -->
									<ul style="font-size:14px; max-width:300px;" class="pb-8">
										<li 
											v-for="(item, i) in model.desc"
											v-bind:key="i"
										>
											{{ item }}
										</li>
									</ul>
									<span>
										<!-- <a class="blue--text text--darken-1">View Project Details</a> -->
									</span>
								</div>
							</div>
						</transition>
					</v-col>
					<!-- <v-col 
						cols="12"
						md="6"
						:class="$vuetify.breakpoint.xs ? 'py-1 px-0':'pa-1'"
					>
						<div 
							class="px-2 d-flex flex-column align-center justify-space-between" 
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
									<a class="blue--text text--darken-1">View Project Details</a>
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
					</v-col> -->
				</v-row>
			</v-container>
		</div>
		<!-- <v-container>
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
								<a class="blue--text text--darken-1">View Project Details</a>
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
								<a class="blue--text text--darken-1">View Project Details</a>
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
		</v-container> -->
		<div
		style="background:url('./back2.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover;"
		>
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
		</div>
		<div 
			style="background:url('./back3.png') right; 
			-o-background-size: cover; -moz-background-size: cover;
			-webkit-background-size:cover; background-size: cover; background-position:top;"
			:style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'min-height:640px;':'min-height:720px;'"
			class="d-flex flex-column align-center justify-center"
		>
			<v-container>
				<v-row
					class="d-flex align-center" 
					:class="$vuetify.breakpoint.xs ? 'py-2 px-0 flex-row':'pa-2 flex-row-reverse'"
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
						:class="$vuetify.breakpoint.xs ? 'py-1 px-2':'pa-4'"
					>
						<div 
							class="grey darken-4 d-flex flex-column align-center justify-start" 
							style="overflow:none;"
						>
							<v-row class="py-5 px-2" style="width:100%;">
								<v-col
									v-for="n in 10"
									:key="n"
									class="d-flex child-flex pa-0 flex-column-reverse"
									cols="3"
									md="3"
								>
									<v-hover v-slot="{ hover }">
										<v-img
											:src="`./illus_${11-n}.png`"
											aspect-ratio="1"
											:style="hover ? 'filter: brightness(0.8);':''"
											style="cursor:pointer;"
											v-on:click="gallery_pic = `./illus_${11-n}.png`"
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
	props: ['drawer', 'product'],
	data () {
		return {
			gallery_pic: './illus_10.png',
			hueRotate: 255,
			items: [
				{
					name:'PNC Property',
					img:'pnc_banner.png',
					icon:'home',
					role: 'Full-Stack Developer',
					desc: [
						'Private property management.',
						'Property details and Maps location.',
						'PDF copies of important documents.',
						'Rent tracking system.',
					]
				},
				{
					name:'CM ACC',
					img:'acc_banner.png',
					icon:'calculator',
					role: 'Front-End Developer, Product Designer',
					desc: [
						'Accounting Software.',
						'Product purchasing, sales and return.',
						'Cash, debt and receivables.',
					]
				},
				{
					name:'Puan Botanicals',
					img:'puan_banner.png',
					icon:'leaf-maple',
					role: 'Front-End Developer',
					desc: [
						'Online kratom store.',
						'E-commerce Product lists and cart.',
						'Shipping and checkout.',
					]
				},
				{
					name:'CM Digital',
					img:'cmd_banner.png',
					icon:'coffee',
					role: 'Front-End Developer, Product Designer',
					desc: [
						'Software house.',
						'Marketing and Advertising.',
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