const express = require('express');
const app = express();

app.get("/", (_, res) => {
 res.send("Hello express");
})

console.log("Hello world");




































 module.exports = app;
