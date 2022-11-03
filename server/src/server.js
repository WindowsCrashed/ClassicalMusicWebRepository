import express from 'express'
import routes from './routes/pieces.js'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use('/pieces', routes)

export default app