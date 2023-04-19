import express from 'express'
const router = express.Router()

let arrArticulosFamiliasMock = [
  {
    IdArticuloFamilia: 1,
    Nombre: 'Accesorioss'
  },
  {
    IdArticuloFamilia: 2,
    Nombre: 'Audio'
  },
  {
    IdArticuloFamilia: 3,
    Nombre: 'Celulares'
  },
  {
    IdArticuloFamilia: 4,
    Nombre: 'Cuidado Personal'
  },
  {
    IdArticuloFamilia: 5,
    Nombre: 'Dvd'
  },
  {
    IdArticuloFamilia: 6,
    Nombre: 'Fotografia'
  },
  {
    IdArticuloFamilia: 7,
    Nombre: 'Frio-Calor'
  },
  {
    IdArticuloFamilia: 8,
    Nombre: 'Gps'
  },
  {
    IdArticuloFamilia: 9,
    Nombre: 'Informatica'
  },
  {
    IdArticuloFamilia: 10,
    Nombre: 'Led - Lcd'
  }
]

// Obtener todos los productos

router.get('/api/articulosfamiliasmock', async (req, res) => {
  res.send(arrArticulosFamiliasMock)
})

// Obtener un artículo por nombre como query

router.get('/api/articulosfamiliasmock/search', (req, res) => {
  const articuloFamiliaByName = arrArticulosFamiliasMock.find(item => item.Nombre === req.query.Nombre)
  if (articuloFamiliaByName) {
    res.json(articuloFamiliaByName)
  } else {
    res.status(404).json({ message: 'Articulo de Familia no encontrado' })
  }
})

// Obtener un articulo familia por el id

router.get('/api/articulosfamiliasmock/:id', async (req, res) => {
  const articuloFamillia = arrArticulosFamiliasMock.find(item => item.IdArticuloFamilia === parseInt(req.params.id))
  if (articuloFamillia) {
    res.json(articuloFamillia)
  } else {
    res.status(404).json({ message: 'Articulo de Familia no encontrado' })
  }
})

// Agregar un articulo familia

router.post('/api/articulosfamiliasmock', async (req, res) => {
  const { Nombre } = req.body
  const articuloFamilia = {
    Nombre,
    IdArticuloFamilia: Math.floor(Math.random() * 100000)
  }

  // agregar a la colección
  arrArticulosFamiliasMock.push(articuloFamilia)
  res.status(201).json(articuloFamilia)
})

// Actualizar un articulo familia

router.put('/api/articulosfamiliasmock/:id', (req, res) => {
  const articuloFamillia = arrArticulosFamiliasMock.find(item => item.IdArticuloFamilia === parseInt(req.params.id))
  if (articuloFamillia) {
    const { Nombre } = req.body
    articuloFamillia.Nombre = Nombre
    res.json({ message: 'articuloFamilia actualizado' })
  } else {
    res.status(404).json({ message: 'articuloFamilia no encontrado' })
  }
})

// Eliminar un articulo familia

router.delete('/api/articulosfamiliasmock/:id', (req, res) => {
  const articuloFamillia = arrArticulosFamiliasMock.find(item => item.IdArticuloFamilia === parseInt(req.params.id))
  if (articuloFamillia) {
    arrArticulosFamiliasMock = arrArticulosFamiliasMock.filter(
      item => item.IdArticuloFamilia !== parseInt(req.params.id)
    )

    res.json({ message: 'articuloFamilia eliminado' })
  } else {
    res.status(404).json({ message: 'articuloFamilia no encontrado' })
  }
})

export default router
