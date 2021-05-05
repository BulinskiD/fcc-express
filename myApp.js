const express = require('express');
const path = require('path');
const app = express();

app.use("/public", express.static("public"));

app.get("/", (_, res) => {
 res.sendFile(path.join(__dirname, "views", "index.html"));
})

console.log("Hello world");




































 module.exports = app;
