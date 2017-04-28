const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const pg = require("pg");
const settings = require("./settings"); // settings.json
const knexSettings = require("./knexfile.js");
const connection = knexSettings.development;
const knex = require('knex')(connection);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  knex.select().table("input").orderBy('created_at', 'desc')
  .then(inputInfo => {
    res.status(200).render('home', {inputInfo});
  })
});

app.post("/success", (req, res) => {
  knex('input').insert(req.body)
  .then(inputInfo => {
    res.status(200).render('success');
    // res.json(req.body);
  }).catch(err => {
    console.error("Knex error on insert:", err);
  })
});

app.listen(PORT, () => {
  console.log(`Exmple app listening on port ${PORT}`);
});

