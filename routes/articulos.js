import express from 'express'
import { createArticulo, getAllArticulos, getArticuloById } from '../controllers/articulos.controllers.js'
const router = express.Router()

// Obtener todos los artículos
router.get('/api/articulos', getAllArticulos)

// Obtener un artículo por su id
router.get('/api/articulos/:id', getArticuloById)

// Crear un artículo
router.post('/api/articulos', createArticulo)

export default router
