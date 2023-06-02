module.exports = function(sequelize, DataTypes) {
    const LocaleSeo = sequelize.define('LocaleSeo', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        language: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "language".'
                }
            }
        },
        group: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "group".'
                }
            }
        },
        key: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "key".'
                }
            }
        },
        subdomain: {
            type: DataTypes.STRING
        },
        url: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "url".'
                }
            }
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "title".'
                }
            }
        },
        description: {
            type: DataTypes.STRING
        },
        keywords: {
            type: DataTypes.STRING
        },
        redirection: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        changeFrequency: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.DECIMAL
        },
        sitemap: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'locale_seos',
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
              }
        ]
    });

    return LocaleSeo;
};