import levelsInformation from "../data/levelsInformation"

const getLevelDifficulty = (levelName) => {
	let difficulty = "Default"
	Object.entries(levelsInformation).forEach(el => {
		Object.keys(el[1]).forEach(level => {
			let levelNameFromData = el[1][level].name.replaceAll(' ', '%20') 
			let levelNameFromParam = levelName

			if (levelNameFromData == levelNameFromParam) {
				difficulty = el[0]
			}
		}) 
	})
	return difficulty

}

export default getLevelDifficulty
