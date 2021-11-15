import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Server is online')
})

// ? Routes
app.get('/note', async (req, res) => {
  const notes = await prisma.note.findMany()
  res.json(notes)
})

app.get('/note/:id', async (req, res) => {
  const { id } = req.params
  const note = await prisma.note.findUnique({
    where: { id: Number(id) }
  })

  res.json(note)
})

app.post('/note', async (req, res) => {
  const { title, date, body } = req.body
  const result = await prisma.note.create({
    data: {
      title,
      date: new Date(date).toISOString(),
      body
    }
  })

  res.json(result)
})

app.put('/note/:id', async (req, res) => {
  const { id } = req.params
  const { title, date, body } = req.body

  try {
    const note = await prisma.note.update({
      where: { id: Number(id) || undefined },
      data: {
        title,
        date: new Date(date).toISOString(),
        body
      }
    })

    res.json(note)
  } catch (error) {
    res.json({ error: `Note with ID ${id} does not exist in database` })
  }
})

app.delete('/note/:id', async (req, res) => {
  const { id } = req.params
  const note = await prisma.note.delete({
    where: { id: Number(id) }
  })

  res.json(note)
})

const port = process.env.PORT
const server = app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`)
})