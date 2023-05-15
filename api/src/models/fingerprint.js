const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Client ID".'
                }
            }
        },
        fingerprint: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "fingerprint".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'fingerprints',
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

    useBcrypt(Fingerprint);

    Fingerprint.associate = function(models) {
    };

    return Fingerprint;
};