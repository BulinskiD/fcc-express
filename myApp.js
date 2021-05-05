require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

app.use((req, _, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  return next();
});

app.get("/", (_, res) => {
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get(
  "/now",
  (req, _, next) => {
    req.time = Date.now();
    return next();
  },
  (req, res) => {
    return res.json({ time: req.time });
  }
);

app.get("/json", (_, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toLocaleUpperCase();
  }
  return res.json({ message });
});

app.get("/:word/echo", (req, res) => {
  const echo = req.params.word;
  return res.json({ echo });
});

app.get("/name", (req, res) => {
  const name = `${req.query.first} ${req.query.last}`;
  return res.json({ name });
});

console.log("Hello world");

module.exports = app;
