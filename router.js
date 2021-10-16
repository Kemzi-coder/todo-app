import {Router} from 'express'
import TodoController from './models/TodoController.js'

const router = new Router()

router.get('/', TodoController.renderIndex)

router.get('/create', TodoController.renderCreate)

router.post('/create', TodoController.create)

router.post('/complete', TodoController.complete)

router.post('/delete', TodoController.delete)

export default router
