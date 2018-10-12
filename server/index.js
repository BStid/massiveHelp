require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const { json } = require("body-parser");

const { getMonsters, addMonster } = require("./controllers/mainController");
const port = 3002;

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(error => {
    console.log(error);
  });

app.get("/api/monsters", getMonsters);
app.post("/api/monsters", addMonster);
app.listen(port, () => console.log(`Running on server ${port}.`));
