import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import {mongoURI} from './private.js'
import * as exphbs from 'express-handlebars'
import path from 'path'

const PORT = process.env.PORT ?? 3000

const __dirname = path.resolve()

const app = express()

// creating handlebars view engine
const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

const startApp = async () => {
	try {
		await mongoose.connect(mongoURI)
		app.listen(PORT, () => {
			console.log('Server is working')
		})
	} catch (e) {
		console.log(e)
	}
}

startApp()
