
const express = require("express");
const app = express();

// test api
app.get("/", function(req, res) {
    res.send("hello");
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode");
    
  });
