import { Sequelize } from 'sequelize';
require('dotenv').config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env. {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
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