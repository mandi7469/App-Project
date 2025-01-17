// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

const app = express();

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

  // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mounts the authentication route at the root path "/"
app.use("/", require("./routes/authRoutes"));

// start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`🌍 Now listening on localhost: ${PORT}`));
