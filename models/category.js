// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Category extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Category.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Category',
//   });
//   return Category;
// };

// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   var Categories = sequelize.define("Categories", {
//     name: DataTypes.STRING,
//     updatedAt: DataTypes.INTEGER,
//     createdAt: DataTypes.INTEGER,
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true
//     }
//   });
//   Categories.associate = function(models) {
//     Categories.belongsToMany(models.Locations, {
//       through: "CategoriesLocations",
//       foreignKey: "categoryId"
//     });
//   };
//   return Categories;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Countries = sequelize.define('Countries', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
  });
  Countries.associate = function (models) {
    // Countries.belongsToMany(models.Locations, {
    //   through: "CategoriesLocations",
    //   foreignKey: "categoryId"
    // });
  };
  return Categories;
};
