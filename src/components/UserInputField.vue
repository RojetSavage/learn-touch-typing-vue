<script>

export default {
	mounted() {
	},
	emits: ['setUserInput', 'setCurrentWordIndex', 'setCorrectArray', 'nextPage'],
	props: ['userInput', 'currentWordIndex', 'page', 'levelWords'],
	methods: {
		handleInput(e) {
			this.$emit('setUserInput', e.target.value)
		},
		handleKeyDown(e) {
			if (this.userInput === undefined) return

			switch (e.code) {
			case "Backspace":
				if (this.userInput[this.userInput.length - 1] === " ") {
				e.preventDefault()
				}
				break;

			case "Space":
				if (this.userInput[this.userInput.length - 1] === " ") {
				e.preventDefault()
				} 
				
				else if (this.userInput.trimStart().split(' ')[this.currentWordIndex % 20] === this.levelWords[this.currentWordIndex]) {   
				this.$emit('setCorrectArray', true)
				this.$emit('setCurrentWordIndex', 1)
				} 
				
				else {
				this.$emit('setCorrectArray', false)
				this.$emit('setCurrentWordIndex', 1)				
				}
				this.$emit('nextPage')
				break;

			default:
				break;
			}
		}
	},
}
</script>

<template lang="">
		<textarea 
		id="userInputField" 
		autoFocus="true" 
		className="resize-none border-2 text-4xl p-3 w-1/2 rounded-lg overflow-hidden bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed border-black dark:border-slate-400 dark:text-white" 
		spellCheck="false" 
		:value="userInput"
		@input="handleInput"
		@keydown="handleKeyDown"
		>  
		</textarea>
</template>


<style>
	textArea {
		height: 25vh
	}
</style>