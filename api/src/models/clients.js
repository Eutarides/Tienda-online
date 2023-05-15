const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define('Client', {
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
        surname: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Apellidos".'
                }
            }
        },
        phoneNumber: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Teléfono".'
                }
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: {
                args: true,
                msg: 'Ya existe un usuario con ese correo electrónico.'
            },
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Email".'
                },
                isEmail: {
                    msg: 'Por favor, rellena el campo "Email" con un email válido.'
                }
            }
        },
        population: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Población".'
                }
            }
        },
        postalCode: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Código Postal".'
                }
            }
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Dirección".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'clients',
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

    useBcrypt(Client);

    Client.associate = function(models) {
    };

    return Client;
};