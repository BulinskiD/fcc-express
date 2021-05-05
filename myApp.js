const express = require('express');
const path = require('path');
const app = express();

app.use("/public", express.static("public"));

app.get("/", (_, res) => {
 return res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/json", (_, res) => {
 return res.json( { message: "Hello json"});
})

console.log("Hello world");




































 module.exports = app;
