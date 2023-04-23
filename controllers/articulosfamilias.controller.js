import { articulosFamilias } from '../base-orm/sequelize-init.js'

export const getArticulosFamilias = async (req, res) => {
  const data = await articulosFamilias.findAll({
    attributes: ['IdArticuloFamilia', 'Nombre']
  })
  res.json(data)
}

export const getArticulosFamiliaById = async (req, res) => {
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
