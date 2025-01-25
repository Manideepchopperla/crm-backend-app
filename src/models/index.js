const sequelize = require('../config/database');
const User = require('./user')(sequelize); // Initialize User model
const Customer = require('./customer')(sequelize); // Initialize Customer model

// Define relationships
Customer.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Customer, { foreignKey: 'userId', as: 'customers' });

module.exports = { sequelize, User, Customer };
