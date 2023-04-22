import express from 'express'
import { addArticuloFamilia, deleteArticuloFamilia, getArticuloFamiliaById, getArticuloFamiliaByName, getArticulosFamilias, updateArticuloFamilia } from '../controllers/articulosFamilias.controllers.js'
const router = express.Router()

// Obtener todos los productos

router.get('/api/articulosfamiliasmock', getArticulosFamilias)

// Obtener un artículo por nombre como query

router.get('/api/articulosfamiliasmock/search', getArticuloFamiliaByName)

// Obtener un articulo familia por el id

router.get('/api/articulosfamiliasmock/:id', getArticuloFamiliaById)

// Agregar un articulo familia

router.post('/api/articulosfamiliasmock', addArticuloFamilia)

// Actualizar un articulo familia

router.put('/api/articulosfamiliasmock/:id', updateArticuloFamilia)

// Eliminar un articulo familia

router.delete('/api/articulosfamiliasmock/:id', deleteArticuloFamilia)

export default router
