const bgElements = () => {
	const bgElem = document.querySelectorAll('.set-bg')

	bgElem.forEach(elem => {
		elem.style.backgroundImage = `url(${elem.dataset.setbg})`
	})
}

bgElements()
