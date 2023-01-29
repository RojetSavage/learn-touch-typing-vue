<script>
import BadgesIcon from './BadgesIcon.vue';
import OptionsIcon from './OptionsIcon.vue';

export default {
	name: "Navbar",
	components: {
		BadgesIcon,
		OptionsIcon,
	},
	props: ['changeLogo'],
	methods: {
		clickMenu(menu) {
			this.$emit('clickMenu', menu)
		}
	},
	emits: ['clickMenu'],
	data() {
		return {
			darkMode: false
		}
	},
}

</script>

<template lang="">
	<nav className="w-full h-20 p-4 flex justify-around items-center border-b-2 dark:border-buttonDark sticky bg-navbarLight dark:bg-navbarDark">
		<RouterLink to="/" className="self-center">
		<div className="flex items-center justify-left">
			<a href="/">
			<img v-if="!changeLogo" className="h-16 mr-3 dark:opacity-90" src="../assets/logo-black.png"  alt="logo" />	
			<img v-else-if="changeLogo" className="h-16 mr-3 dark:opacity-90" src="../assets/logo-white.png"  alt="logo" />	
			</a>
		</div>
		</RouterLink>
		<div className="flex top-1.5 self-end absolute right-9">
			<BadgesIcon @click="clickMenu('badges')"></BadgesIcon>
			<OptionsIcon @click="clickMenu('options')"></OptionsIcon>
		</div>
	</nav>
</template>
