const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        vatRate: {
            type: DataTypes.INTEGER(2).UNSIGNED,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "vatRate".'
                }
            }
        },
        valid: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Valid".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'taxes',
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

    useBcrypt(Tax);

    Tax.associate = function(models) {
    };

    return Tax;
};