const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const CartDetail = sequelize.define('CartDetail', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'Cart',
                key:'id'
              }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'Product',
                key:'id'
              }
        },
        productName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingresa el nombre del producto.'
                }
            }
        },
        basePrice: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingresa el precio base.'
                }
            }
        },
        taxPrice: {
            type: DataTypes.DECIMAL(6, 2)
        },
        unitOfMeasurement: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingresa la unidad de medida.'
                }
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, ingresa la cantidad.'
                }
            }
        },createdAt: {
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
        tableName: 'cart_details',
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
                name: "carts_cartId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "cartId" },
                ]
            },
        ]
    });

    CartDetail.associate = function(models) {
        // Define las asociaciones con otros modelos, si las hay
    };

    return CartDetail;
};