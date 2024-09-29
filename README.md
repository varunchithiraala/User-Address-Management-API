# User Address Management API

This project is a RESTful API built using Node.js, Express, and Sequelize, designed to manage users and their addresses. It includes endpoints for user registration and address management, utilizing a MySQL database for data persistence.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Database Initialization](#database-initialization)
- [Testing the API](#testing-the-api)

## Technologies Used

- Node.js
- Express
- Sequelize
- MySQL
- dotenv
- Body-parser

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/varunchithiraala/User-Address-Management-API.git
   cd User-Address-Management-API
2. Install the dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_DIALECT=mysql
PORT=4000
4. Start the server:
   ```bash
   npm install

## API Endpoints

### User Registration

**POST** `/api/user/register`

#### Request Body:
   ```json
   {
   "name": "John Doe",
   "address": "123 Main St, City, Country"
   }

#### Response:

**200 OK**
   ```json
   {
   "message": "User and address registered successfully!"
   }

#### Response:

**500 Internal Server Error**
```json
{
  "message": "Error message here"
}

### Database Initialization

To initialize the database, the API automatically checks if the database exists and creates it if not. You can also manually run the following command to create the database:

```bash
npm run db:init

### Testing the API

You can use tools like Postman or Insomnia to test the API endpoints. Here’s how to test the user registration endpoint:

1. Open Postman/Insomnia.
2. Set the method to **POST** and the URL to `http://localhost:4000/api/user/register`.
3. In the body, select **JSON** and provide the request body as shown above.
4. Click **Send** to see the response.
