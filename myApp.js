require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static("public"));

app.get("/", (_, res) => {
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", (_, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toLocaleUpperCase();
  }
  return res.json({ message });
});

console.log("Hello world");

module.exports = app;
