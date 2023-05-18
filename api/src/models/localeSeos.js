module.exports = function (sequelize, DataTypes) {
    const LocaleSeo = sequelize.define('LocaleSeo',{
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        keywords: {
            type: DataTypes.STRING,
        },
        redirection: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        changeFrequency: {
            type: DataTypes.STRING,
        },
        priority: {
            type: DataTypes.DECIMAL,
        },
        sitemap: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
        tableName: 'localeSeos',
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
  
    LocaleSeo.associate = function (models) {};
  
    return LocaleSeo;
  };