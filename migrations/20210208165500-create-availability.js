'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Availabilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nid: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      availabilityTs: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      creationTs: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Availabilities');
  },
};
