import { DataTypes } from 'sequelize';

// Define the User model function
const UserModel = (sequelize) => {
  // Create a User model using the Sequelize instance
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'User',
    timestamps: true
  });

  return User;
};

export default UserModel;
