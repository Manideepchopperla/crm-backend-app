const express = require('express');
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply authentication middleware to all customer routes
router.use(authMiddleware);

// Route for creating a customer
router.post('/', customerController.createCustomer);

// Route for getting all customers
router.get('/', customerController.getCustomers);

// Route for getting a single customer by ID
router.get('/:id', customerController.getCustomerById);

// Route for updating a customer by ID
router.put('/:id', customerController.updateCustomer);

// Route for deleting a customer by ID
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
