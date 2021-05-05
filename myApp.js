const express = require('express');
const app = express();

app.get("/", (_, res) => {
 res.send("Hello Express");
})

console.log("Hello world");




































 module.exports = app;
