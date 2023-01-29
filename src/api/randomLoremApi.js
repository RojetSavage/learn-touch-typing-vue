const randomLoremAPI = async function() {
	let levelWords = [];
	let loading = true;
	const url = 'https://lorem-ipsum-by-api-ninjas.p.rapidapi.com/v1/loremipsum';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd7c8c9f6c4msh4c0de2cc7495514p13567cjsnd47a0cecd4a8',
			'X-RapidAPI-Host': 'lorem-ipsum-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(url, options)
		.then(response => response.json())
		.then(response => {
			levelWords = response.text.split(' ').slice(0, 40)
			console.log(levelWords)
			loading = false;
		})
		.catch(err => console.error(err));
		
	return {
		levelWords,
		loading
	}
}

export default randomLoremAPI;