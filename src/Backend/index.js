// latest try 
const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

//needed for login
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require('express-session')
//needed for API
// const bodyParser = require('body-parser');
// const db = require('./models');

app.use(cors());
app.use(express.json());

//sql stuff
const db = mysql.createConnection({
  user: "exercisesApp",
  host: "exercise-app-db.mysql.database.azure.com",
  password: "YunFu420",
  database: "ExercisesApp"
});
app.post("/create", (req, res) => {
  const exercise = req.body.Exercise;

  db.query(
    "INSERT INTO Exercises (Exercise) VALUES (?)",
    [exercise],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting value");
      } else {
        res.send("Value inserted");
      }
    }
  );
});
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});


//API stuff for Kallum 


app.post('/api/exercises', async (req, res) => {
  const { exercise } = req.body;

  try {
    const result = await db.promise().query(
      'INSERT INTO exercises (Exercise) VALUES (?)',
      [exercise]
    );
    const id = result[0].insertId;
    res.status(201).json({ id, exercise });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});







//login things
app.use(session({
  secret: 'cats'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // allows us to send sessions via client server reqests
  })
);
app.use(cors());

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
