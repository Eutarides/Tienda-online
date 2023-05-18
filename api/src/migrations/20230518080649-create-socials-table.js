'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('socials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamMemberId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teamMembers',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      socialMediaName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      profileUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('socials');
  }
};