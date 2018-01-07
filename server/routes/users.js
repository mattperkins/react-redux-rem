import express from "express";
import validateInput from "../validations/signup";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
