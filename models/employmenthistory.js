'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmploymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EmploymentHistory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmploymentHistory',
  });
  return EmploymentHistory;
};