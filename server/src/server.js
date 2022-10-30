import express from 'express'
import routes from './routes/pieces.js'

const app = express()

app.use(express.json())
app.use('/pieces', routes)

export default app