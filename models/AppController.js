import TodoService from './TodoService.js'

class AppController {
	async renderIndex(req, res) {
		try {
			const todos = await TodoService.getAll()

			res.render('index', {
				title: 'Todos list',
				isIndex: true,
				script: '/script.js',
				todos
			})
		} catch (e) {
			return res.status(500).json(e.message)
		}
	}

	async renderCreate(req, res) {
		res.render('create', {
			title: 'Create todo',
			isCreate: true,
			script: '/create.js'
		})
	}
}

export default new AppController()
