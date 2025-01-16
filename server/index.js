// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();


// mounts the authentication route at the root path "/"
app.use("/", require("./routes/authRoutes"));

// start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`🌍 Now listening on localhost: ${PORT}`));
