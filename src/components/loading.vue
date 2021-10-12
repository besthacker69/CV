<template>
	<div 
		class="d-flex flex-column justify-center align-center" 
		style="position:fixed; height:100vh; width:100vw; z-index:9999; background-color:rgba(0,0,0,0.8);"
	>
		<v-card color="transparent" class="d-flex flex-column justify-center align-center pa-4" style="width:300px;">
			<!-- <v-progress-circular
				indeterminate
				:size="100"
				class="ma-4"
				color="grey darken-2"
			></v-progress-circular> -->
			<span class="pa-2 text-h1 grey--text">{{ loadingNum }}</span>
			<v-progress-linear color="white" :value="loadingNum"></v-progress-linear>
			<span class="pa-2 text-caption grey--text">
				<v-progress-circular
				indeterminate
				class="ma-2"
				:size="20"
				color="grey"
			></v-progress-circular>
				Loading Assets . . .
			</span>
		</v-card>
	</div>
</template>

<script>
export default {
	props: ['loadingNum'],
	data () {
		return {
        }
	},
	mounted () {
	},
	methods: {
	},
	watch: {
	},
	computed: {
	}
}
</script>
<style>
</style>