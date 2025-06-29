const express = require("express");
const router = express.Router();
const { sendSuggestion } = require("../controllers/contactController");
const { body } = require("express-validator");

router.post(
  "/contact",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message cannot be empty"),
  ],
  sendSuggestion
);

module.exports = router;
