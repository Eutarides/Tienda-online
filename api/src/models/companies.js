module.exports = function(sequelize, DataTypes) {
    const Company = sequelize.define('Company', {
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
        telephone: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        postalCode: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        nif: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nif".'
                }
            }
        },
        comercialAddress: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        fiscalAddress: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Dirección fiscal".'
                }
            }
        },
        fiscalNAme: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre fiscal".'
                }
            }
        },
        comercialName: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
    }, {
        sequelize,
        tableName: 'companies',
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
        ]
    });

    Company.associate = function(models) {
    };

    return Company;
};