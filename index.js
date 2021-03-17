
const express = require("express");
const app = express();

// test api
app.get("/", function(req, res) {
    res.send("hello");
});

app.listen(8080);
