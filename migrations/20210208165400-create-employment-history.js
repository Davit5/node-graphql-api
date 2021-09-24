'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmploymentHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      companyName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      endDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      jobTitle: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      standardizedCompanyUid: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      standardizedJobTitleUid: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // roleId: {
      //
      // },
      // userId: {
      //
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('EmploymentHistories', {});
  },
};
