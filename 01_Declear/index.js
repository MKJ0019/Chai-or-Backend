require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hey twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login at chai code.</h1>");
});

// app.listen(port, () => {
app.listen(process.env.PORT, () => {
console.log(`Example app listining on port ${env.PORT}`);
});
