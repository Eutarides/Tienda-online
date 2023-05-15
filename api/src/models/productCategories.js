const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const ProductCategory = sequelize.define('ProductCategory', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre".'
                }
            }
        },
        visibility: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "visibilidad".'
                },
            }
        },
    }, {
        sequelize,
        tableName: 'productCategories',
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
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            },
        ]
    });

    useBcrypt(ProductCategory);

    ProductCategory.associate = function(models) {
    };

    return ProductCategory;
};