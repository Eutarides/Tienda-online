module.exports = function (sequelize, DataTypes) {
    const LocaleSeoRedirect = sequelize.define(
      'LocaleSeoRedirect',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        localeSeoId: {
          type: DataTypes.INTEGER,
        },
        language: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        group: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        key: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subdomain: {
          type: DataTypes.STRING,
        },
        oldUrl: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
        deletedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        tableName: 'localeSeoRedirects',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
        ],
      }
    );
  
    LocaleSeoRedirect.associate = function (models) {};
  
    return LocaleSeoRedirect;
  };