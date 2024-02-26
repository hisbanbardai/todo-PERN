const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

//Creates an express application
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
