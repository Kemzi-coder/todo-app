// javascript file for /

const elements = document.querySelectorAll('.todo')

// editing logic
elements.forEach(el => {
	const editBtn = el.querySelector('#edit')
	const title = el.querySelector('#title')

	editBtn.addEventListener('click', e => {
		e.preventDefault()
		title.removeAttribute('readonly')
		title.focus()
	})

	title.addEventListener('focusout', e => {
		e.target.setAttribute('readonly', '')
	})

	title.addEventListener('focus', e => {
		e.target.selectionStart = e.target.selectionEnd = 10000
	})
})


