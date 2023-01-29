<script>
import './toggle-switch.css'

export default {
	methods: {
		toggleDarkMode() {
			this.darkMode = !this.darkMode
			document.documentElement.classList.toggle('dark')
			this.$emit('changeLogo')
		}
	},
	emits: ['changeLogo'],
	computed: {
		isDarkMode() {
			if (document.documentElement.classList.contains('dark')) {
				return true
			} else {
				return false
			}			
		}
	}
}
</script>

<template lang="">
	<label className="relative inline-block w-12 h-7">
	<input type="checkbox" :checked="isDarkMode" @click="toggleDarkMode" className="input opacity-0 w-0 h-0">
		<span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-toggleSwitch"></span>
	</label>
</template>

