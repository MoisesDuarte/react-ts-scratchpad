import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Server is online')
})

const port = 3000 || process.env.PORT
const server = app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`)
})