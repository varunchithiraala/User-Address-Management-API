import db from '../models/index.js';

// Define references to User and Address models
const User = db.User;
const Address = db.Address;

// Controller function to register a new user
export const registerUser = async (req, res) => {
  const { name, address } = req.body;

  try {
    const newUser = await User.create({ name });
    await Address.create({ address, userId: newUser.id });

    res.status(200).send({ message: 'User and address registered successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
