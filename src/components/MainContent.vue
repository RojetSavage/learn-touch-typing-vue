<script>
import InformationBar from './InformationBar.vue';
import TestText from './TestText.vue';
import UserInputField from './UserInputField.vue';
import Badges from './Badges.vue';
import Options from './Options.vue';
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue';
import useTextGenerator from '../hooks/useTextGenerator';
import LevelSummary from './LevelSummary.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import HomePage from './HomePage.vue';

export default {
	name: 'Main Content',
	components: {
		InformationBar,
		TestText,
		UserInputField,
		Badges,
		Options,
		Navbar,
		Sidebar,
		LevelSummary,
		LoadingSpinner,
		HomePage
	},
	created() {
		if (this.$route.name != 'home') {
			this.setupLevel();
		}
	},
	watch: {
		$route() {
			console.log(this.$route)
			if (this.$route.name != 'home') {
				this.showWelcome = false
				this.setupLevel();
			} else {
				this.showWelcome = true;
			}
		}
	},
	methods: {
		randomLoremApi() {
			this.loading = true
			const url = 'https://lorem-ipsum-by-api-ninjas.p.rapidapi.com/v1/loremipsum';
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': import.meta.env.VITE_APP_LOREM_API_KEY,
					'X-RapidAPI-Host': 'lorem-ipsum-by-api-ninjas.p.rapidapi.com'
				}
			};

			fetch(url, options)
			.then(response => response.json())
				.then(response => {
					console.log(response)
					this.levelWords = response.text.split(' ').slice(0, 40)
					this.loading = false;
				})
				.catch(err => console.error(err))
		},
		randomWordsApi() {
			this.loading = true;
			const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': import.meta.env.VITE_APP_RANDOM_WORDS_API_KEY,
						'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
					}
				};

				fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20', options)
					.then(response => response.json())
					.then(response => {
						this.levelWords = response
						this.loading = false
					})
					.catch(err => console.error(err));
		},
		setupLevel() {
			let levelName = this.$route.name;
			let pathName = this.$route.path.slice(1)

			if (levelName === "Latin") {
				this.randomLoremApi();

			} else if (levelName === "Random Words") {
				this.randomWordsApi();
			} else {
				let { levelWords } = useTextGenerator(pathName, levelName)
				this.levelWords = levelWords;
			}
		},
		resetLevel() {
			this.userInput = '';
			this.currentWordIndex = 0;
			this.correctArray = [];
			this.page = 0;
			this.time = 0;
			this.completedLevel = false;
			this.timePassed = 0;
		},
		nextPage() {
			const totalPageNumbers = Math.ceil(this.levelWords.length / this.wordsPerPage);
			console.log(totalPageNumbers)
			if (this.currentWordIndex === this.page * this.wordsPerPage + this.wordsPerPage || this.currentWordIndex === this.levelWords.length) {
				this.page += 1;
				this.userInput = '';
				if (this.page === totalPageNumbers) {
					this.completedLevel = true;
					this.finalTime = this.timePassed
				}
			}
		},
		setNextPage() {
			this.page += 1
		},
		setUserInput(value) {
			this.userInput = value;
		},
		setCurrentWordIndex(value) {
			this.currentWordIndex += value;
		},
		setCorrectArray(value) {
			this.correctArray.push(value);
		},
		handleMenu(menu) {
			let initState = {
				badges: false,
				options: false
			}
			if (this.menuState[menu]) {
				this.menuState = initState
			} else {
				this.menuState = {
					...initState,
					[menu]: true
				}
			}
		},
		incrementTimer() {
			this.timePassed += 1;
			// console.log(this.timePassed)
		},
	},
	computed: {
		wordsArray() {
			return this.levelWords.slice(this.page * this.wordsPerPage, this.page * this.wordsPerPage + this.wordsPerPage)
		},
	},
	data() {
		return {
			menuState: {
				badges: false,
				options: false,
			},
			wordsPerPage: 20,
			userInput: '',
			currentWordIndex: 0,
			correctArray: [],
			page: 0,
			toggleLevelReset: false,
			completedLevel: false,
			changeLogo: false,
			levelWords: [],
			loading: false,
			showWelcome:true,
			timePassed: 0,
			finalTime:0,
		}
	}
}
</script>

<template>
	<Navbar @clickMenu="handleMenu($event)" :changeLogo="changeLogo"></Navbar>
	<Sidebar @resetLevel="resetLevel" />

	<Badges v-if="menuState.badges" @clickMenu="handleMenu($event)" />
	<Options v-if="menuState.options" @clickMenu="handleMenu($event)" @change-logo="this.changeLogo = !this.changeLogo" />
	
	<div v-if="showWelcome" class="flex flex-col items-center">
		<HomePage/>
	</div>
	
	<LevelSummary v-else-if="completedLevel" :correctArray="correctArray" @resetLevel="resetLevel" :finalTime="finalTime" />
	<main v-else className="main flex flex-col items-center bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed h-full">
		<LoadingSpinner v-if="loading" />
		<InformationBar v-if="!loading" @timing="incrementTimer" :timePassed="timePassed" :correctArray="correctArray" :currentWordIndex="currentWordIndex" :levelWordsLength="levelWords.length || 0"></InformationBar>
		
		<TestText v-if="!loading" :correctArray="correctArray" :currentWordIndex="currentWordIndex" :wordsArray="wordsArray" :page="page"></TestText>
		
		<UserInputField v-if="!loading" :levelWords="levelWords" :userInput="userInput" @setUserInput="setUserInput($event)"
		:currentWordIndex="currentWordIndex" @setCurrentWordIndex="setCurrentWordIndex($event)" :page="page"
		@nextPage="nextPage" @setCorrectArray="setCorrectArray($event)"></UserInputField>
	</main>
</template>