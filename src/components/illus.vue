<template>
	<div class="py-3 fill-height">
		<v-row>
			<!-- <v-spacer /> -->
			<v-col
				cols="12"
				md="5"
				class="py-0 justify-center align-center"
			>
				<v-card style="background-color:rgba(0,0,0,0.65); max-height:calc(100vh - 55px - 90px); overflow-y:auto;">
				<v-divider style="width:100%;"/>
				<div class="pa-4 d-flex flex-column align-start justify-center text-center">
					<h2 :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:20px;' : 'font-size:24px;'">
						Illustration
					</h2>
				</div>
				<v-divider style="width:100%;"/>
				<div>
					<v-container>
						<v-row>
							<v-col
								v-for="illus in illustrations"
								v-bind:key="illus"
								cols="12"
								sm="6"
							>
								<v-img 
									:src="illus"
									aspect-ratio="1" 
									class="rounded-lg"
								/>
							</v-col>
						</v-row>
					</v-container>
				</div>
				</v-card>
			</v-col>
			<v-spacer />
		</v-row>
	</div>
</template>

<script>
export default {
	components: {
	},
	props: ['drawer', 'product'],
	data () {
		return {
			illustrations: ["5.png","6.png","7.png","8.png"]
		}
	},
	created () {
		// this.getData()
	},
	methods: {
		getData () {
	


		},
		logout () {
			// this.$cookies.remove('password')
			// this.$cookies.remove('email')
			// this.$router.push({path: '/login'})
		}
	},
	computed: {
		scrollbarTheme() {
			return this.$vuetify.theme.dark ? 'dark' : 'light';
		},
	}
}
</script>
<style>
.light::-webkit-scrollbar {
  width: 15px;
}

.light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: black;
}

.dark::-webkit-scrollbar {
  width: 15px;
}

.dark::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.dark::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
