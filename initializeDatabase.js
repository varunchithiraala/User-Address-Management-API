import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Function to initialize the database
export const initializeDatabase = async () => {
  try {
    // Create a connection to the MySQL server
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    // Query to create the database if it doesn't already exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`Database ${process.env.DB_NAME} created or already exists`);
    await connection.end();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};
