const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const JWT_SECRET = process.env.JWT_SECRET; // Secret key for JWT

module.exports = {
  // User registration handler
  register: async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Hash the user's password for secure storage
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create a new user in the database
      const user = await User.create({ name, email, password: hashedPassword });
      
      res.status(201).json({ message: 'User registered successfully.', user });
    } catch (error) {
      res.status(500).json({ error: 'Error registering user.', details: error.message });
    }
  },

  // User login handler
  login: async (req, res) => {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password.' });
      }

      // Generate a JWT token for the authenticated user
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
      res.status(500).json({ error: 'Error logging in.', details: error.message });
    }
  }
};
