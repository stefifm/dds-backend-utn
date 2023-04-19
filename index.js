import express from 'express'
import articulosFamiliasMockRouter from './routes/articulosFamiliasMock.js'

// Crear el servidor
const app = express()

// Middleware
app.use(express.json())

// Controlar la ruta
app.get('/', (req, res) => {
  res.send('Backend inicial de dds-backend')
})

// Acceso a la ruta de articulos familia mock

app.use(articulosFamiliasMockRouter)

// Levatar el servidor

const port = 3000
app.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`)
})
