module.exports = function(sequelize, DataTypes) {
    const SocialNetworksCompanies = sequelize.define('SocialNetworksCompanies', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "companyId".'
                }
            },
            references:{
                model:'Company',
                key:'id'
              }
        },
        socialNetworkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "socialNetworkId".'
                }
            },
            references:{
                model:'SocialNetwork',
                key:'id'
              }
        },
    }, {
        sequelize,
        tableName: 'social_networks_companies',
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
            {
                name: "social_networks_companyId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "companyId" },
                ]
            },
            {
                name: "socials_networks_socialNetworkId_foreignKey",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "cartId" },
                ]
            },
        ]
    });

    SocialNetworksCompanies.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return SocialNetworksCompanies;
};