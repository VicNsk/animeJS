const bgElements = () => {
	const bgElem = document.querySelectorAll('.set-bg')
	for (let i = 0; i < bgElem.length; i++) {
		const src = bgElem[i].dataset.setbg
		// bgElem[i].style.backgroundImage = 'url(' + src + ')'
		bgElem[i].style.backgroundImage = `url(${src})`
		// console.log(src)
	}
}

bgElements()
