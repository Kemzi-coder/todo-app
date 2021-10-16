import Todo from './Todo.js'

class TodoService {
	async create(todo) {
		const createdTodo = await new Todo(todo)
		await createdTodo.save()
		return createdTodo
	}

	async getAll() {
		const todos = Todo.find().lean()
		return todos
	}

	async complete(todo) {
		await Todo.updateOne({_id: todo.id}, {
			completed: !!todo.completed, title: todo.title
		})
	}

	async delete(id) {
		await Todo.deleteOne({_id: id})
	}
}

export default new TodoService()
