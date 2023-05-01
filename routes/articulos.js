import express from 'express'
import {
  createArticulo,
  deleteArticulo,
  getAllArticulos,
  getArticuloById,
  updateArticulo
} from '../controllers/articulos.controllers.js'
const router = express.Router()

// Obtener todos los artículos
router.get('/api/articulos', getAllArticulos)

// Obtener un artículo por su id
router.get('/api/articulos/:id', getArticuloById)

// Crear un artículo
router.post('/api/articulos', createArticulo)

// Actualizar un articulo
router.put('/api/articulos/:id', updateArticulo)

// Eliminar un articulo
router.delete('/api/articulos/:id', deleteArticulo)

export default router
