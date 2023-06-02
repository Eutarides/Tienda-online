module.exports = function(sequelize, DataTypes) {
    const MenuItem = sequelize.define('MenuItem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        menuId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references:{
                model:'Menu',
                key:'id'
              }
        },
        localeSeoId: {
            type: DataTypes.INTEGER,
            references:{
                model:'LocaleSeo',
                key:'id'
              }
        },
        localeSeoSlugId: {
            type: DataTypes.INTEGER,
            references:{
                model:'LocaleSeoSlug',
                key:'id'
              }
        },
        parentId: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        customUrl: {
            type: DataTypes.STRING
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
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
        tableName: 'menu_items',
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
                name: "menu_items_menuId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "menuId" },
                ]
            },
            {
                name: "menu_items_localeSeoId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "localeSeoId" },
                ]
            },
            {
                name: "menu_items_localeSeoSlugId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "localeSeoSlugId" },
                ]
            },
        ]
    });

    MenuItem.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return MenuItem;
};