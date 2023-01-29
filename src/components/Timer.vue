<template lang="">
	<div className= "text-2xl dark:text-white dark:opacity-90" > Time: {{formatTime}} </div>
</template>


<script>
export default {
	name: "Timer",
	props: ['timePassed'],
	emits: ['timing'],
	data() {
		return {
			timerInterval:null,
		}
	},
	methods: {
		startTimer() {
			this.timerInterval = setInterval(() => {
				this.$emit('timing')}, 1000)
		},
		stopTimer() {
			clearInterval(this.timerInterval)
		}
	},
	mounted() {
		this.startTimer()
	},
	watch: {
		$route() {
			this.stopTimer();
			this.startTimer()
		}
	},
	unmounted() {
	},
	computed: {
		formatTime() {
			let seconds = this.timePassed % 60
			let minutes = Math.floor(this.timePassed / 60)
			if (seconds < 10) {
				seconds = `0${seconds}`
			}
			if (minutes === 0) {
				return `00:${seconds}`;
			} 
			if (minutes < 10) {
				return `0${minutes}:${seconds}`
			}
			if (minutes <= 59) {
				return `${minutes}:${seconds}`
			}
		}
	}
}
</script>