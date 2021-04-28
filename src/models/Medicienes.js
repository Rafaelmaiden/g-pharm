const { Model, DataTypes } = require('sequelize')

class Medicines extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      purchase_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      due_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Medicines',
      tableName: 'medicines'
    })
  }

  static associate (models) {
    this.belongsTo(models.Pharmacies, {
      foreignKey: 'id_pharmacy',
      as: 'medicine_pharmacy'
    })

    this.belongsToMany(models.Sales, {
      foreignKey: 'vendor_id',
      through: 'sales_medicines',
      as: 'sales'
    })
  }
}

module.exports = { Medicines }
