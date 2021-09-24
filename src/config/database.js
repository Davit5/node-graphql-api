/*
|--------------------------------------------------------------------------
| Database Connection
|--------------------------------------------------------------------------
|
| Setup connection to PostgreSqL
|
*/

import Sequelize from 'sequelize';

// const sequelize = new Sequelize(
//   `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
// );

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    // operatorsAliases: false,
    // define: {
    //   underscored: true,
    // },
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export { sequelize };
