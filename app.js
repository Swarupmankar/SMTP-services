const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");
const pingRoutes = require("./routes/pingRoutes");

const app = express();

app.use(cors());

app.use(
  express.json({
    origin: ["http://localhost:8080", "https://amit-kajale.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api", contactRoutes);
app.use("/", pingRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
