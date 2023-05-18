module.exports = function(sequelize, DataTypes) {
    const TeamMember = sequelize.define('TeamMember', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Nombre".'
            }
        }
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Apellidos".'
            }
        }
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Email".'
            }
        }
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(255),
        validate: {
            notNull: {
                msg: 'Por favor, rellena el campo "Descripción".'
            }
        }
      },
      imageId: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    }, {
      sequelize,
      tableName: 'teamMembers',
      timestamps: true,
      paranoid: true
    });
  
    TeamMember.associate = function(models) {
    };

    return TeamMember;
  };