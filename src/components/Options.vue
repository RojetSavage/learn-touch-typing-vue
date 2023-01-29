<script>
import CloseIcon from './icons/CloseIcon.vue'
import ToggleSwitch from './ToggleSwitch.vue'

export default {
	components: {
		CloseIcon,
		ToggleSwitch
	},
  emits: ['clickMenu', 'changeLogo'],
	methods: {
		clickMenu(menu) {
			this.$emit('clickMenu', menu)
		}
	}
}
</script>


<template lang="">
    <div className="absolute top-28 right-8 h-56 w-80 bg-slate-400 dark:bg-buttonDark rounded-xl p-2 z-10">
      <div className="absolute top-0 right-0 p-2 mt-3 mr-3 rounded-full hover:bg-white hover:cursor-pointer" @click="clickMenu('options')">
      <CloseIcon  />
      </div>
      <div className="bg-slate-300 w-full h-full rounded-xl p-2 flex flex-col justify-start items-center font-medium text-xl dark:bg-buttonHoverDark">
        <h1 className="my-2 dark:text-white dark:opacity-90">Options:</h1>
          <div className="flex justify-around w-3/4">
          <p className="dark:text-white dark:opacity-90">Dark Mode:</p>
			<ToggleSwitch @changeLogo="this.$emit('changeLogo')" />
		</div>      
        </div>
    </div>
</template>
