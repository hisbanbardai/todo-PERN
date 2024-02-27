require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db/connection");

const PORT = process.env.PORT;

//Creates an express application
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//ROUTES

//get all todos

//get a todo

//create a todo
app.post("/todos", (req, res) => {
  const { description } = req.body;
  pool
    .query(`INSERT into todo (description) VALUES ($1) RETURNING *`, [
      description,
    ])
    .then((data) => res.json({ todo: data.rows[0] }))
    .catch((error) => console.error(error.message));
});

//update a todo

//delete a todo

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
