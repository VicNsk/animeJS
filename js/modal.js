const modal = document.querySelector('.search-model')
const btnSearch = document.querySelector('.icon_search')
const btnCloseSearch = modal.querySelector('.search-close-switch')
const inputSearch = modal.querySelector('#search-input')

btnSearch.addEventListener('click', () => {
	modal.style.display = 'block'
})

btnCloseSearch.addEventListener('click', () => {
	modal.style.display = 'none'
})

inputSearch.addEventListener('keydown', () => {
	// if (event.key === 'Enter' && inputSearch.value.length > 0) {
	// 	console.log(inputSearch.value)
	// 	inputSearch.value = ''
	// }
	console.log(inputSearch.value)
})
