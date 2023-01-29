<script>
import levelsInformation from '../data/levelsInformation';
import { useWindowResize } from '../hooks/useWindowResize';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoArrowRight, CoArrowLeft, IoChevronDownOutline } from "oh-vue-icons/icons";
addIcons(CoArrowRight, CoArrowLeft, IoChevronDownOutline );

export default {
	mounted(){
		window.addEventListener('resize', this.handleResize);
		window.addEventListener('locationchange', () => {
		})
	},
	unmounted(){
		window.removeEventListener('resize', this.handleResize)
	},
	data() {
		return {
			windowWidth: undefined,
			open: true,
			activeLinkStyles: "min-w-max w-10/12 flex p-2 text-xl rounded-xl shadow-sm mr-5 mb-2 bg-slate-50 translate-x-3 transition-transform items-center dark:bg-darkhighlightWord",
			normalLinkStyles:"flex p-2 text-xl rounded-xl shadow-sm mr-5 mb-2 hover:bg-slate-50 hover:translate-x-3 hover:transition-transform items-center xl:justify-start  dark:hover:bg-darkhighlightWord w-10/12 min-w-max"
		}
	},
	emits:['resetLevel'],
	components: {
		"v-icon": OhVueIcon,
	},
	computed: {
		categoryHeaders() {
			return Object.entries(levelsInformation).map((item, idx) => {
				return {
					category: item[0],
					levels: item[1],
					computedCategory: item[0] == "Beginner" ? "Letters" : item[0] == "Intermediate" ? "Text" : item[0] == "Advanced" ? "Challenges" :  null,
				}
			})
		},
		activeLink() {
			return this.$route.path.slice(1).replaceAll('%20', ' ')
		},
		breakpoint() {
			if (this.windowWidth < 1280) {
				this.open = true;
			}
		}
	},
	methods: {
		handleResize() {
			this.windowWidth = window.innerWidth
		}
	},

}
</script>

<template lang="">
	<!-- Opened Sidebar -->
	<div v-show="open" id="sidebar" className="overflow-x-scroll xl:overflow-x-hidden xl:w-80 xl:left-0 xl:absolute xl:overflow-y-scroll h-full bg-lightBackground dark:bg-darkBackground bg-cover bg-fixed xl:h-[calc(100%-5rem)] h-20">

		<!-- Close Button -->
		<div className="hidden xl:block  xl:absolute xl:top-0 xl:right-2 text-xl hover:bg-slate-50 p-1 mt-1 rounded-full cursor-pointer over:transition-transform hover:translate-x-1 dark:text-white dark:opacity-90 hover:dark:bg-buttonHoverDark dark:bg-buttonDark" @click="open = false">
			<v-icon name="co-arrow-left" scale="2"/>
		</div>

		<div className="xl:mt-10 xl:ml-9 flex xl:block relative top-2">
				<div v-for="item in categoryHeaders" className="flex xl:block">
					<div className="xl:mt-4 xl:mb-2 xl:py-2 xl:w-10/12 hidden xl:inline-block text-2xl w-full uppercase rounded-xl shadow-sm dark:text-white dark:bg-buttonDark hover:dark:bg-buttonHoverDark ">
						<div className="relative flex left-2 dark:opacity-90 text-lg">
							{{ item.computedCategory }}
							<div className="relative top-1 left-3">
							</div>
						</div>
					</div>

						<!-- Level Entries -->
						<router-link v-for="level in item.levels" :to="level.name.replaceAll(' ', '%20')" @click="this.$emit('resetLevel')">
							<div :class="level.name === activeLink ? activeLinkStyles : normalLinkStyles">
								<div className="dark:text-white">
									<v-icon name="io-chevron-down-outline" scale="1"/>
								</div>
								<span class="capitalize ml-3 dark:text-white dark:opacity-90 w-auto text-lg">
									{{ level.name}}
								</span>
							</div>
						</router-link>
				</div>
		</div>
	</div>

	<!-- Closed Sidebar -->
	<div v-show="!open" className="w-16 h-screen absolute">
		<div className="text-xl h-10 w-10 dark:bg-buttonDark dark:text-white dark:hover:bg-buttonHoverDark hover:bg-slate-50 mt-2 ml-2 rounded-full cursor-pointer flex items-center over:transition-transform justify-center hover:translate-x-3"
		@click="open = true"
		>
			<v-icon name="co-arrow-right" scale="2"/>
		</div>
	</div>
</template>