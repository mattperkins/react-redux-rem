import validator from "validator";
import isEmpty from "lodash/isEmpty";

export default function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (!validator.isEmpty(data.email)) {
    errors.email = "Email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }
  if (validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }
  if (validator.isEmpty(data.timezone)) {
    errors.timezone = "Timezone is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
