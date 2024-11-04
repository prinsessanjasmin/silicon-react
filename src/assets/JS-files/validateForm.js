const validateForm = (value, pattern) => {
    return pattern.test(value); // Returns true if the value matches the pattern, otherwise false
  };

export default validateForm; 