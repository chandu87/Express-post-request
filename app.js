const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/friends", function(req, res){
    res.render("friends");
});
app.listen(3000, function(){
    console.log("Server started at port : 3000");
});