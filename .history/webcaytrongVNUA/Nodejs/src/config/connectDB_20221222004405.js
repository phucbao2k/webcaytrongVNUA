import { Sequelize } from 'sequelize';
require('dotenv').config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
  dialectOptions:
  process.env.DB_SSL === 'true' ?
  {
    ssl:
    {
      require: true,
      rejectUnauthorized: false
    }: {}
  }
});
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default connectDB;
//