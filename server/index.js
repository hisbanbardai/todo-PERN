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

//get all todos - using async/await
app.get("/todos", async (req, res) => {
  try {
    const allToDos = await pool.query(`SELECT * FROM todo;`);
    console.log(allToDos);
    res.json(allToDos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//create a todo - using promises
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
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateToDo = await pool.query(
      `UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *`,
      [description, id]
    );
    res.json(updateToDo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDo = await pool.query(
      `DELETE FROM todo WHERE todo_id = $1 RETURNING *`,
      [id]
    );
    res.json(deleteToDo);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
