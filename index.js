import express from 'express'

// Crear el servidor
const app = express()

// Controlar la ruta
app.get('/', (req, res) => {
  res.send('Backend inicial de dds-backend')
})

// Levatar el servidor

const port = 3000
app.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`)
})
