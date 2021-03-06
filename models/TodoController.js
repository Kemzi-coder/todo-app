import TodoService from './TodoService.js'

class TodoController {
	async create(req, res) {
		try {
			await TodoService.create(req.body)
			res.redirect('/')
		} catch (e) {
			if (!req.body.title) {
				return res.status(400).json('Title is required')
			}
			res.status(500).json(e)
		}
	}

	async complete(req, res) {
		try {
			await TodoService.complete(req.body)

			res.redirect('/')
		} catch (e) {
			res.status(500).json(e.message)
		}
	}

	async delete(req, res) {
		try {
			await TodoService.delete(req.body.id)

			res.redirect('/')
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new TodoController()
