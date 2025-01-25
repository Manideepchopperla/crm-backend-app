module.exports.validateCustomer = ({ email, phone }) => {
    const errors = [];
  
    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
      errors.push('Invalid email format.');
    }
  
    // Validate phone format (basic check, can be customized further)
    const phoneRegex = /^[0-9]{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      errors.push('Invalid phone number format.');
    }
  
    return errors;
  };
  