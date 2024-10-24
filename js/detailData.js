const detailData = () => {
	const preloder = document.querySelector('.preloder')

	const renderGanreList = ganres => {
		const dropdownBlock = document.querySelector('.header__menu .dropdown')

		ganres.forEach(ganre => {
			dropdownBlock.insertAdjacentHTML(
				'beforeend',
				`<li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>`
			)
		})
	}

	const renderAnimeDetails = (array, itemId) => {
		const animeObj = array.find(item => item.id == itemId)
		const imgBlock = document.querySelector('.anime__details__pic')
		const viewsBlock = imgBlock.querySelector('.view')
		const titleBlock = document.querySelector('.anime__details__title h3')
		const subTitleBlock = document.querySelector('.anime__details__title span')
		const descBlock = document.querySelector('.anime__details__text p')
		const widgetList = document.querySelectorAll(
			'.anime__details__widget ul li'
		)
		const breadcrumb = document.querySelector('.breadcrumb__links span')

		if (animeObj) {
			imgBlock.dataset.setbg = animeObj.image
			viewsBlock.insertAdjacentHTML(
				'beforeend',
				`<i class="fa fa-eye"></i> ${animeObj.views}`
			)

			titleBlock.textContent = animeObj.title
			subTitleBlock.textContent = animeObj['original-title']
			descBlock.textContent = animeObj.description
			widgetList[0].insertAdjacentHTML(
				'beforeend',
				`<span>Date aired:</span>${animeObj.date}`
			)
			widgetList[1].insertAdjacentHTML(
				'beforeend',
				`<span>Raiting:</span> ${animeObj.rating}`
			)
			widgetList[2].insertAdjacentHTML(
				'beforeend',
				`<span>Genre:</span> ${animeObj.tags.join(', ')}`
			)
			breadcrumb.textContent = animeObj.ganre

			document.querySelectorAll('.set-bg').forEach(elem => {
				elem.style.backgroundImage = `url(${elem.dataset.setbg})`
			})

			setTimeout(() => {
				preloder.classList.remove('active')
			}, 500)
		} else {
			console.log('Аниме отсутсрвует')
		}
	}

	// preloder.classList.add('active')

	fetch('./db.json')
		.then(response => response.json())
		.then(data => {
			const ganres = new Set()
			const itemParam = new URLSearchParams(window.location.search).get(
				'itemId'
			)
			data.anime.forEach(item => {
				ganres.add(item.ganre)
			})

			if (itemParam) {
				renderAnimeDetails(data.anime, itemParam)
			} else {
				console.log('Аниме отсутсрвует')
			}
			renderGanreList(ganres)
		})
}

detailData()
