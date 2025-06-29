const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is up and running",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
