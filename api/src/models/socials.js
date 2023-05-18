module.exports = function(sequelize, DataTypes) {
    const Social = sequelize.define('Social', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        teamMemberId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        socialMediaName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Usuario".'
                }
            }
        },
        profileUrl: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "url del perfil"'
                }
            }
        }
    }, {
        sequelize,
        tableName: 'socials',
        timestamps: true,
        paranoid: true
    });
  
    Social.associate = function(models) {
      // Asociaciones de Social con otros modelos si es necesario
    };
  
    return Social;
  };