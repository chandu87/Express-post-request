const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.post("/addfriend", function(req, res){
    res.send("This is a Post Request");
});
app.get("/friends", function(req, res){
    const friendsList = ["chandu", "shiva", "Sujith", "Mahender", "Rupesh"];
    res.render("friends", {friends : friendsList});
});
app.listen(3000, function(){
    console.log("Server started at port : 3000");
});