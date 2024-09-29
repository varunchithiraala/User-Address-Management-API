import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './models/index.js';
import { initializeDatabase } from './initializeDatabase.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Function to initialize the database
const initDatabase = async () => {
  await initializeDatabase();
  try {
      await db.sequelize.sync(); // Sync Sequelize models after database creation
      console.log('Database synced successfully.');
  } catch (err) {
      console.error('Failed to sync database:', err.message);
      throw err;
  }
};

// Function to start the server
const startServer = () => {
  app.use('/api/user', userRoute);
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
  });
};

// Start the process
const startApp = async () => {
  try {
      await initDatabase();
      startServer();
  } catch (err) {
      console.error('Error initializing app:', err.message);
  }
};

// Start the application
startApp();
