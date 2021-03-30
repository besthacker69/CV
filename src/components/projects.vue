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
				<div class="px-4 py-2 d-flex flex-column align-start justify-center text-center">
					<h2 :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:20px;' : 'font-size:24px;'">
						Projects
					</h2>
				</div>
				<v-divider style="width:100%;"/>
				<div>
					<v-list dense color="transparent" class="py-0">
						<v-list-item
							v-for="project in projects"
							v-bind:key="project.name"
						>
							<v-list-item-content class="text-overline">
								{{project.name}} - {{project.position}}
								<v-list-item-subtitle class="d-flex flex-row align-center justify-start">
									<div 
										class="accent-4 mx-2 rounded-circle"
										:class="project.status == 'LIVE' ? 'green':'red'"
										style="width:10px; height:10px;"
									/>
										{{project.status}} -
										<a 
											:href="project.url"
											target="_blank"
											class="mx-2 text-truncate" 
										> 
											{{project.url ? project.url:'' }} 
										</a>
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<!-- <v-list-item>
							<v-list-item-icon class="d-none d-sm-flex">
								<v-icon>mdi-code-array</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-overline">
								PNC Property - full stack
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-icon class="d-none d-sm-flex">
								<v-icon>mdi-code-array</v-icon>
							</v-list-item-icon>
							<v-list-item-content class="text-overline">
								MCC POS - front end
							</v-list-item-content>
						</v-list-item> -->
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
			projects: [
				{
					name: "Puan Botanicals",
					position: "Front End",
					status: "LIVE",
					url: "https://puanbotanicals.com"
				},
				{
					name: "PNC Property",
					position: "Full Stack",
					status: "PRIVATE",
					url: ""
				},
				{
					name: "MCC POS",
					position: "Front End",
					status: "PRIVATE",
					url: ""
				}
			]
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
