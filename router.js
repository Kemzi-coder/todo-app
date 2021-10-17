import {Router} from 'express'
import TodoController from './models/TodoController.js'
import AppController from './models/AppController.js'

const router = new Router()

router.get('/', AppController.renderIndex)

router.get('/create', AppController.renderCreate)

router.post('/create', TodoController.create)

router.post('/complete', TodoController.complete)

router.post('/delete', TodoController.delete)

export default router
