import { DataTypes } from 'sequelize';

// Define the Address model function
const AddressModel = (sequelize) => {
  // Define the Address model with its attributes
  const Address = sequelize.define('Address', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      onDelete: 'SET NULL',
      allowNull: true
    }
  }, {
    tableName: 'Address',
    timestamps: true
  });

    return Address;
};

export default AddressModel;
