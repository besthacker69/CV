<template>
	<div class="">
		<v-divider style="width:100%;"/>
		<div class="pa-4 d-flex flex-column align-start justify-center text-center">
			<h2 :style="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size:24px;' : 'font-size:36px;'">
				{{days+':'+hours+':'+minutes+':'+seconds+','+milis}}
			</h2>
			<h6 class="text-caption text-sm-body-2 grey--text">Web Developer, Concept Artist.</h6>
		</div>
		<v-divider style="width:100%;"/>
		<div>
	</div>
</template>

<script>
export default {
	components: {
	},
	props: ['drawer', 'product'],
	data () {
		return {
			days: '',
			hours: '',
			minutes: '',
			seconds: '',
			milis: '',
			randomInterval: '1000'

		}
	},
	mounted () {
		this.timerCount();
		this.interval = setInterval(() => {
			this.randomInterval = Math.floor(Math.random() * 500) + 100;
			this.timerCount();
		}, 100);
	},
	methods: {
		timerCount () {
			var countDownDate = new Date("Jan 1, 2992 00:00:00").getTime();
			var now = new Date().getTime();
			var dist = countDownDate - now;
			this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
			this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
			this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
			var milisCount = Math.floor((dist % (1000 * 60) /100))
			this.milis = milisCount.toString().slice(-1);
		},
	}
}
</script>
