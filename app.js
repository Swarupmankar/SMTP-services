const express = require("express");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");
const pingRoutes = require("./routes/pingRoutes");

const app = express();
app.use(express.json());

app.use("/api", contactRoutes);
app.use("/", pingRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
