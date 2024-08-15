const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Nameste BackEnd");
});
app.get("/twitter", (req, res) => {
  res.send("Bhaskar-jy-Saikia");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login to Nameste backend app</h1>");
});
app.get("/youtube", (req, res) => {
  app.send("<h2>Nameste Backend Youtube </h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
