const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Cart = sequelize.define('Cart', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            references:{
                model:'Customer',
                key:'id'
              }
        },
        fingerprintId: {
            type: DataTypes.INTEGER,
            references:{
                model:'Fingerprint',
                key:'id'
              }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'carts',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "carts_customerId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "customerId" },
                ]
            },
            {
                name: "carts_fingerprintId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "fingerprintId" },
                ]
            }
        ]
    });

    Cart.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return Cart;
};