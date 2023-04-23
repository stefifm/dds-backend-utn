import express from 'express'
import { getArticulosFamiliaById, getArticulosFamilias } from '../controllers/articulosfamilias.controller.js'

const router = express.Router()

// Obtener todos los articulos familias
router.get('/api/articulosfamilias', getArticulosFamilias)
// Obtener un articulo familia por id
router.get('/api/articulosfamilias/:id', getArticulosFamiliaById)

export default router
