import generateRandomText from '../utility/generateRandomText';
import getLevelDifficulty from '../utility/getLevelDifficulty'
import levelsInformation from '../data/levelsInformation';

let levelWords = []
let loading = false;

const useTextGenerator = (pathName, levelName) => {
	const difficulty = getLevelDifficulty(pathName)

	if (difficulty === 'Beginner') {
		let randomLevelWords = generateRandomText(levelsInformation['Beginner'][levelName].availableLetters, 4, 20)
		let levelText = levelsInformation['Beginner'][levelName].text
		if (levelText) {
			levelWords = randomLevelWords.concat(levelText.split(' '))
		}
		else {
			levelWords = randomLevelWords
		}
	} else {
		levelWords = levelsInformation[difficulty][levelName].text.split(' ')
	}

	return {
		levelWords,
		loading
	}
}

export default useTextGenerator;


