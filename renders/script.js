const lightboxbackground = document.createElement('div')
const lightbox = document.createElement('div')
lightboxbackground.id = 'lightboxbackground'
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
document.body.appendChild(lightboxbackground)

const images = document.querySelectorAll('img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightboxbackground.classList.add('active')
		lightbox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img)
	})
})

lightboxbackground.addEventListener('click', e => {
	//if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
	lightboxbackground.classList.remove('active')
})

lightbox.addEventListener('click', e => {
	//if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
	lightboxbackground.classList.remove('active')
})

