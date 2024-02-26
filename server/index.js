const express = require("express");
const cors = require("cors");

//Creates an express application
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
