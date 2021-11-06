const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateItemInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.itemName = !isEmpty(data.itemName) ? data.itemName : "";

  // Title checks
  if (Validator.isEmpty(data.itemName)) {
    errors.title = "Name of item is required";
  }

  // Date checks
  // data.expDate === string
  const date_regex = /^([2-9]\d\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/;
  if (!(date_regex.test(data.expDate))) {
    errors.expDate = "Please enter a valid expiry date";
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};