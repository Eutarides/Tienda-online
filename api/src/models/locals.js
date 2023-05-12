module.exports = function(sequelize, DataTypes) {
    const Local = sequelize.define('Local', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        languageAlias: {
            allowNull: false,
            type: DataTypes.CHAR(2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Language Alias".'
                }
            }
        },
        entity: {
            allowNull: false,
            type: DataTypes.STRING(250),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "entity".'
                },
            }
        },
        entityKey: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "entityKey".'
                },
            }
        },
        key: {
            allowNull: false,
            type: DataTypes.STRING(250),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "key".'
                },
            }
        },
        value: {
            type: DataTypes.STRING(250),
        },
    }, {
        sequelize,
        tableName: 'locals',
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

    Local.associate = function(models) {
    };

    return Local;
};