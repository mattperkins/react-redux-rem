import express from "express";
import validator from "validator";
import isEmpty from "lodash/isEmpty";

const router = express.Router();

function validateInput(data) {
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

router.post("/", (req, res) => {
  //   console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
