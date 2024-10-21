const fbData = () => {
	fetch('https://lessonglo-default-rtdb.firebaseio.com/anime.json')
		.then(res => {
			return res.json()
		})
		.then(data => {
			console.log(data)
		})
}

fbData()
