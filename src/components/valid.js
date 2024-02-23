// valid.js

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  export function validatePhoneNumber(phoneNumber) {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  }
  
  export function validateFormInputs(inputs) {
    const errors = {};
    if (!inputs.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!inputs.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!validateEmail(inputs.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!inputs.phoneNumber.trim()) {
      errors.phoneNumber = "Please enter your phone number.";
    } else if (!validatePhoneNumber(inputs.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number (10 digits).";
    }
    if (!inputs.timeshareResales.trim()) {
      errors.timeshareResales = "Please enter timeshare resales information.";
    }
    if (!inputs.timeshareRentals.trim()) {
      errors.timeshareRentals = "Please enter timeshare rentals information.";
    }
    if (!inputs.propertyDescription.trim()) {
      errors.propertyDescription = "Please enter timeshare property description.";
    }
    if (!inputs.imageFile) {
      errors.imageFile = "Please select a timeshare property image.";
    }
    return errors;
  }
  