import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite:' + './.data/pymes.db')

// definicion del modelo

const articulosFamilias = sequelize.define(
  'articulosfamilias',
  {
    IdArticuloFamilia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre requerido'
        },
        len: {
          args: [5, 30],
          msg: 'Nombre debe tener entre 5 y 30 caracteres'
        }
      }
    }
  },
  {
    hooks: {
      beforeValidate: (articulofamilia, options) => {
        if (typeof articulofamilia.Nombre === 'string') {
          articulofamilia.Nombre = articulofamilia.Nombre.toUpperCase().trim()
        }
      }
    },
    timestamps: false
  }
)

const articulos = sequelize.define(
  'articulos',
  {
    IdArticulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre requerido'
        },
        len: {
          args: [5, 60],
          msg: 'Nombre debe tener entre 5 y 60 caracteres'
        }
      },
      unique: {
        args: true,
        msg: 'Nombre ya existe en la tabla'
      }
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Precio requerido'
        }
      }
    },
    CodigoDeBarra: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Codigo de barra requerido'
        }
      }
    },
    IdArticuloFamilia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Id de articulo familia requerido'
        }
      }
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Stock requerido'
        }
      }
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Activo requerido'
        }
      }
    }
  },
  {
    hooks: {
      beforeValidate: (articulo, options) => {
        if (typeof articulo.Nombre === 'string') {
          articulo.Nombre = articulo.Nombre.toUpperCase().trim()
        }
      }
    },
    timestamps: false
  }
)

export { articulosFamilias, articulos, sequelize }
