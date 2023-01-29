<script>
export default {
	props: ['correctArray', 'finalTime'],
	emits: ['resetLevel'],
	methods: {
		handleResetLevel() {
			this.$emit('resetLevel')
		}
	}
}
</script>


<template lang="">
	<div className="w-full h-full flex justify-center bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed">
		<div className="bg-highlightWord mt-20 w-1/3 h-1/3 flex items-center justify-center p-3 rounded-lg shadow-2xl">
			<div className="flex flex-col rounded-lg h-full w-full justify-center items-center bg-palePink py-8 shadow-md">
					<p className="text-4xl mb-4">Level Summary</p>
					<p className="text-2xl">Percent Correct: <span>{{( correctArray.filter(bool => bool === true).length / correctArray.length * 100).toFixed(2)}}%</span></p>
					<p className="text-2xl mt-4">Time: <span>{{finalTime}} Seconds</span></p>
					<p className="text-2xl mt-4">Words Per Minute: <span>{{(60 / finalTime * correctArray.length).toFixed(2)}}</span></p>
					<p className="text-2xl mt-4">Badges Earned: <span>None</span></p>
					<button className="text-2xl mt-4 bg-blackShadows hover:bg-slate-100 p-3 rounded-lg shadow-md border"
					@click="handleResetLevel"
					>Repeat Level</button>
			</div>
		</div>
	</div>
</template>
