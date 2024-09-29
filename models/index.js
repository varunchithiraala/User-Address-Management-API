import Sequelize from 'sequelize';
import dbConfig from '../config/db.js';
import UserModel from './userModel.js';
import AddressModel from './addressModel.js';

// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

// Create an empty object to hold our models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.User = UserModel(sequelize);
db.Address = AddressModel(sequelize);

// Define relationships
db.User.hasMany(db.Address, { as: 'addresses', foreignKey: 'userId' });
db.Address.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user'
});

export default db;
