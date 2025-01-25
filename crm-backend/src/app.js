const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT; // Retrieve the port number from environment variables

// Middleware to parse JSON requests
app.use(express.json());

// Route handlers for authentication and customer operations
app.use('/auth', authRoutes);
app.use('/customers', customerRoutes);

// Sync database and start the server
sequelize.sync()
    .then(() => {
        console.log("Database Connected Successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("Error connecting to the database:", err));
