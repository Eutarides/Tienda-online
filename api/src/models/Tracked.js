const useBcrypt = require('sequelize-bcrypt')

module.exports = function (sequelize, DataTypes) {
  const Tracked = sequelize.define('Tracked', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ip: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    resource: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    method: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    statusCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    


  }, {
    sequelize,
    tableName: 'trackeds',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
    ]
  })

  useBcrypt(Tracked)

  Tracked.associate = function (models) {

  }

  return Tracked
}
