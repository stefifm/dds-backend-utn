import express from 'express'
import { addArticuloFamiliaDB, deleteArticuloFamiliaDB, getArticuloFamiliaByNameDB, getArticulosFamiliaByIdDB, getArticulosFamilias, updateArticuloFamilaDB } from '../controllers/articulosfamilias.controllers.js'

const router = express.Router()

// Obtener todos los articulos familias
router.get('/api/articulosfamilias', getArticulosFamilias)

// Obtener un articulo familia por nombre
router.get('/api/articulosfamilias/search', getArticuloFamiliaByNameDB)

// Obtener un articulo familia por id
router.get('/api/articulosfamilias/:id', getArticulosFamiliaByIdDB)

//  Agregar un articulo familia
router.post('/api/articulosfamilias', addArticuloFamiliaDB)

// Actualizar un articulo familia
router.put('/api/articulosfamilias/:id', updateArticuloFamilaDB)

// Eliminar un articulo familia
router.delete('/api/articulosfamilias/:id', deleteArticuloFamiliaDB)

export default router
