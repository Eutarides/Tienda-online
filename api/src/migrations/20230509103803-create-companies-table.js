'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone: {
        unique: false,
        allowNull: true,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: true,
        unique: false,
        type: Sequelize.STRING
      },
      nif: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      comercialAddress: {
        unique: false,
        allowNull: false,
        type: Sequelize.STRING
      },
      fiscalAddress: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      fiscalNAme: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      comercialName: {
        unique: false,
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
    await queryInterface.dropTable('companies');
  }
};

