<script>
export default {
	name: "TestText",
	props: ['correctArray', 'currentWordIndex', 'wordsArray', 'page'],
	computed: {
	}
}
</script>

<template lang="">
	<div className="testText mb-2 text-4xl p-2 w-1/2 border-2 border-black rounded-lg overflow-hidden dark:border-slate-400 "> 
		<template v-for="(word, idx) in this.wordsArray">
			<mark v-if="idx === this.currentWordIndex%20" className="bg-highlightWord p-0 dark:bg-darkhighlightWord rounded-lg" key={idx}>{{word}}{{' '}}</mark>
			<span v-else-if="(this.correctArray[(page * 20) + idx])" className="correctWord dark:text-white dark:opacity-90">{{word}}{{' '}}</span>
			<span v-else-if="(this.correctArray[(page * 20) + idx] === undefined)" className="dark:text-white dark:opacity-90">{{word}}{{' '}}</span>
			<span v-else className="incorrectWord dark:text-white dark:opacity-90">{{word}}{{' '}}</span>
		</template>
	  </div>  
</template>

<style >
	.testText {
		height: 25vh;
	}
	
	.correctWord {
		text-decoration: green underline 
	}

	.incorrectWord {
		text-decoration: red underline 
	} 
</style>

