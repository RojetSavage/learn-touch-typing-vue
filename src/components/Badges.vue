<template lang="">
    <div className="absolute top-28 right-8 h-96 w-96 bg-slate-400 rounded-xl p-2 z-10 dark:bg-buttonDark">
      <div className="absolute top-0 right-0 p-2 mt-3 mr-4 rounded-full hover:bg-white hover:cursor-pointer" @click="clickMenu('badges')">
		<CloseIcon/>
		</div>
      <div className="bg-slate-300 w-full h-full rounded-xl p-2 flex flex-col justify-start items-center font-medium text-xl dark:bg-buttonHoverDark">
        <h1 className="my-2 dark:text-white ">Badges:</h1>

      </div>
    </div>
</template>

<script>
	import CloseIcon from './icons/CloseIcon.vue'

export default {
	components: {
		CloseIcon
	},
	emits: ['clickMenu'],
	methods: {
		clickMenu(menu) {
			this.$emit('clickMenu', menu)
		}
	}
}
</script>
