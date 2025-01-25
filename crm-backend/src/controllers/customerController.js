const { Customer } = require('../models');
const { validateCustomer } = require('../utils/validation'); 

module.exports = {
  // Create a new customer
  createCustomer: async (req, res) => {
    try {
      const { email, phone } = req.body;

      // Validate email and phone
      const validationErrors = validateCustomer({ email, phone });
      if (validationErrors.length) {
        return res.status(400).json({ errors: validationErrors });
      }

      // Create a new customer and associate it with the logged-in user
      const customer = await Customer.create({ ...req.body, userId: req.user.id });
      res.status(201).json({ message: 'Customer created successfully.', customer });
    } catch (error) {
      res.status(500).json({ error: 'Error creating customer.', details: error.message });
    }
  },

  // Get all customers for the logged-in user
  getCustomers: async (req, res) => {
    try {
      // Retrieve all customers associated with the authenticated user
      const customers = await Customer.findAll({});
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching customers.', details: error.message });
    }
  },

  // Get customers By id
  getCustomerById: async (req, res) => {
    try {
      // Retrieve all customers associated with the authenticated user
      const customers = await Customer.findAll({ where: { id: req.params.id } });
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching customers.', details: error.message });
    }
  },

  // Update a customer's details
  updateCustomer: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the customer by ID
      const customer = await Customer.findOne({ where: { id, userId: req.user.id } });
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found.' });
      }

      // Update the customer's details
      await customer.update(req.body);
      res.status(200).json({ message: 'Customer updated successfully.', customer });
    } catch (error) {
      res.status(500).json({ error: 'Error updating customer.', details: error.message });
    }
  },

  // Delete a customer
  deleteCustomer: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the customer by ID
      const customer = await Customer.findOne({ where: { id, userId: req.user.id } });
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found.' });
      }

      // Delete the customer
      await customer.destroy();
      res.status(200).json({ message: 'Customer deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting customer.', details: error.message });
    }
  }
};
