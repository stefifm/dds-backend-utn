import { articulosFamilias } from '../base-orm/sequelize-init.js'

// Obtener todos los articulos familias
export const getArticulosFamilias = async (req, res) => {
  const data = await articulosFamilias.findAll({
    attributes: ['IdArticuloFamilia', 'Nombre']
  })
  res.json(data)
}

// Obtener un articulo familia por el nombre

export const getArticuloFamiliaByNameDB = async (req, res) => {
  const articuloFamiliaByName = await articulosFamilias.findOne({
    attributes: ['IdArticuloFamilia', 'Nombre'],
    where: { Nombre: req.query.Nombre }
  })

  if (articuloFamiliaByName) {
    res.json(articuloFamiliaByName)
  } else {
    res.status(404).json({ message: 'Articulo de Familia no encontrado' })
  }
}

// Obtener un articulo familia por el id

export const getArticulosFamiliaByIdDB = async (req, res) => {
  const articuloFamilia = await articulosFamilias.findOne({
    attributes: ['IdArticuloFamilia', 'Nombre'],
    where: { IdArticuloFamilia: req.params.id }
  })
  if (articuloFamilia) {
    res.json(articuloFamilia)
  } else {
    res.status(404).json({ message: 'Articulo de Familia no encontrado' })
  }
}

// Agregar un articulo familia

export const addArticuloFamiliaDB = async (req, res) => {
  const { Nombre } = req.body
  const data = await articulosFamilias.create({
    Nombre
  })
  res.status(201).json(data)
}

// Actualizar un articulo familia
export const updateArticuloFamilaDB = async (req, res) => {
  const articuloFamilia = await articulosFamilias.findOne({
    attributes: ['IdArticuloFamilia', 'Nombre'],
    where: { IdArticuloFamilia: req.params.id }
  })
  if (articuloFamilia) {
    const { Nombre } = req.body
    articuloFamilia.Nombre = Nombre
    await articuloFamilia.save()
    res.json({ message: 'articuloFamilia actualizado' })
  } else {
    res.status(404).json({ message: 'articuloFamilia no encontrado' })
  }
}

// Eliminar un articulo familia
export const deleteArticuloFamiliaDB = async (req, res) => {
  const articuloFamilia = await articulosFamilias.findOne({
    attributes: ['IdArticuloFamilia', 'Nombre'],
    where: { IdArticuloFamilia: req.params.id }
  })
  if (articuloFamilia) {
    await articuloFamilia.destroy()
    res.json({ message: 'articuloFamilia eliminado' })
  } else {
    res.status(404).json({ message: 'articuloFamilia no encontrado' })
  }
}
