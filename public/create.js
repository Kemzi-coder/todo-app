// javascript file for /create

const title = document.getElementById('title')
const form = document.getElementById('form')

// form validation
form.addEventListener('submit', e => {
	e.preventDefault()
	if (title.value === '') {
		title.classList.add('invalid')
		title.oninput = () => {
			if (title.value === '') {
				title.classList.add('invalid')
			} else {
				title.classList.remove('invalid')
			}
		}
	} else {
		e.target.submit()
	}
})

