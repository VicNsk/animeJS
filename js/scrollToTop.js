const scrollToTop = () => {
	const btnTop = document.querySelector('#scrollToTopButton')

	btnTop.addEventListener('click', event => {
		// console.log(event)
		event.preventDefault()
		// window.scrollTo({
		// 	top: 0,
		// 	behavior: 'smooth',
		// })
		seamless.scrollIntoView(document.querySelector('.header'), {
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
	})
}

scrollToTop()
