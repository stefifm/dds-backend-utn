import { articulos } from '../base-orm/sequelize-init.js'
import { Op, ValidationError } from 'sequelize'

// Obtener todos los artículos
const getAllArticulos = async (req, res, next) => {
  if (req.query.Pagina) {
    const where = {}
    if (req.query.Nombre !== undefined && req.query.Nombre !== '') {
      where.Nombre = {
        [Op.like]: `%${req.query.Nombre}%`
      }
    }

    if (req.query.Activo !== undefined && req.query.Activo !== '') {
      where.Activo = (req.query.Activo === 'true')
    }

    const Pagina = req.query.Pagina ?? 1
    const LimitPage = 10

    const { count, rows } = await articulos.findAndCountAll({
      attributes: [
        'IdArticulo',
        'Nombre',
        'Precio',
        'Stock',
        'FechaAlta',
        'Activo'
      ],
      order: [['Nombre', 'ASC']],
      where,
      offset: (Pagina - 1) * LimitPage,
      limit: LimitPage
    })

    return res.json({ items: rows, RegistrosTotal: count })
  } else {
    const items = await articulos.findAll({
      attributes: [
        'IdArticulo',
        'Nombre',
        'Precio',
        'CodigoDeBarra',
        'IdArticuloFamilia',
        'Stock',
        'FechaAlta',
        'Activo'
      ],
      order: [['Nombre', 'ASC']]
    })

    return res.json(items)
  }
}

//  Obtener un articulo por su id
const getArticuloById = async (req, res, next) => {
  const items = await articulos.findOne({
    attributes: [
      'IdArticulo',
      'Nombre',
      'Precio',
      'CodigoDeBarra',
      'IdArticuloFamilia',
      'Stock',
      'FechaAlta',
      'Activo'
    ],
    where: { IdArticulo: req.params.id }
  })
  if (items) {
    res.json(items)
  } else {
    res.status(404).json({
      message: `Artículo con id ${req.params.id} no encontrado`
    })
  }
}

// Crear un articulo
const createArticulo = async (req, res, next) => {
  try {
    const data = await articulos.create({
      Nombre: req.body.Nombre,
      Precio: req.body.Precio,
      CodigoDeBarra: req.body.CodigoDeBarra,
      IdArticuloFamilia: req.body.IdArticuloFamilia,
      Stock: req.body.Stock,
      FechaAlta: req.body.FechaAlta,
      Activo: req.body.Activo
    })
    res.status(200).json(data.dataValues)
  } catch (error) {
    if (error instanceof ValidationError) {
      let messages = ''
      error.errors.forEach((er) => { messages += (er.path ?? 'campo') + ': ' + er.message + '\n' })
      res.status(400).json({ message: messages })
    } else {
      throw error
    }
  }
}

export { getAllArticulos, getArticuloById, createArticulo }
