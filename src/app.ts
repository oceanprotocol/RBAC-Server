import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()
const app = express()
const port = 3000

import indexRouter from './routes/accessRoute'

app.use(express.json())
app.use(cors())
app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`RBAC app listening at http://localhost:${port}`)
})
