<template>
	<div class="py-8">
		<v-row>
			<!-- <v-spacer /> -->
			<v-col
				cols="12"
				md="6"
				class="py-0 justify-center align-center"
			>
				<v-divider style="width:100%;"/>
				<div class="px-4 py-1 d-flex flex-column align-start justify-center text-center">
					<h2 :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:20px;' : 'font-size:24px;'">
						Web Development
					</h2>
				</div>
				<v-divider style="width:100%;"/>
				<div>
					<v-list dense color="transparent" class="py-0">
						<v-list-item>
							<v-list-item-icon class="d-none d-sm-flex">
								<v-icon>mdi-cellphone-link</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-overline">
								Vue.js - Vuetify
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-icon class="d-none d-sm-flex">
								<v-icon>mdi-code-array</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-overline">
								Laravel - PHP
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>
			</v-col>
			<v-spacer />
		</v-row>
		<v-row>
			<!-- <v-spacer /> -->
			<v-col
				cols="12"
				sm="6"
				md="6"
				class="py-0 justify-center align-center"
			>
				<v-divider style="width:100%;"/>
				<div class="px-4 py-1 d-flex flex-column align-start justify-center text-center">
					<h2 :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:20px;' : 'font-size:24px;'">
						Illustration & Animation
					</h2>
				</div>
				<v-divider style="width:100%;"/>
				<div>
					<v-list dense color="transparent" class="py-0">
						<v-list-item>
							<v-list-item-icon class="d-none d-sm-flex">
								<v-icon>mdi-brush</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-overline">
								Photoshop - After Effects
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</div>
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
	}
}
</script>
