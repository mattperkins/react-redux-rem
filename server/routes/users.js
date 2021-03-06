import express from "express";
import validateInput from "../validations/signup";
import bcrypt from "bcrypt";

import User from "../models/user";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    const { username, password, timezone, email } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);

    User.forge(
      {
        username,
        timezone,
        email,
        password_digest
      },
      {
        hasTimestamps: true
      }
    )
      .save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
  } else {
    res.status(400).json(errors);
  }
});

export default router;
