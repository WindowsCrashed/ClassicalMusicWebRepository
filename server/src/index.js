import server from './server.js'
import { connectDb } from './config/db.js'

const PORT = 4404

const startServer = () => {
    server.listen(PORT, () =>
     console.log(`Server running on http://localhost:${PORT}`))
}

connectDb()

startServer()