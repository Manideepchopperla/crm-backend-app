# CRM Backend Application

This repository contains the backend implementation of a CRM (Customer Relationship Management) system. The application provides APIs for managing customers, user authentication, and searching customer data based on ID. It is built with scalability, security, and modularity in mind.

## Features

### Core Features
- **Customer Management**: CRUD operations for customer data.
- **User Authentication**: JWT-based authentication and password hashing.
- **Search**: Search customers by id.
- **Error Handling**: Comprehensive validation and error messages.

## Tech Stack
- **Node.js** with **Express**: Backend framework.
- **Sequelize**: ORM for database interactions.
- **MySQL**: Relational database.
- **JWT**: Authentication.
- **bcrypt**: Password hashing.
- **joi**: Data validation.
- **dotenv**: Environment variable management.

## Prerequisites

Ensure you have the following installed:
- Node.js (v16 or later)
- MySQL

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Manideepchopperla/crm-backend-app.git
   cd crm-backend-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Install MYSQL and create a Database**

4. **Configure Environment Variables**
   - Change the values fron `.env` file in the `src` directory.
       ```env
       PORT=3000
       DB_NAME=database Name            #Name of the database
       DB_USER="root"                  # Database user (root typically for local database)
       DB_PASSWORD=PASSWORD             # Database user password
       DB_HOST="localhost"             # Host where the database is located
       JWT_SECRET=your_jwt_secret
       ```

5. **Start the Application**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in and receive a JWT token.

### Customers
- `GET /customers`: Retrieve all customers (with optional pagination and filtering).
- `POST /customers`: Create a new customer.
- `GET /customers/:id`: Retrieve a customer by ID.
- `PUT /customers/:id`: Update a customer's details.
- `DELETE /customers/:id`: Delete a customer.


## Project Structure

```
crm-backend/
├── src/
│   ├── config/          # Database and app configuration
│   ├── controllers/     # API controllers
│   ├── middlewares/     # Authentication and error handling middlewares
│   ├── models/          # Sequelize models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   ├── .env             # Environment variables
│   └── app.js           # Entry point of the application
├── package.json         # Project metadata and dependencies
├── .package-lock.json
├── .crm-api-doc.yaml    # API Documentation
├── .gitignore           # Files to ignore in git
├── README.md            # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.

---

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/Manideepchopperla/crm-backend-app).
