const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.post("/addfriend", function(req, res){
    console.log(req.body.newFriend);
    res.send("This is a Post Request");
});
app.get("/friends", function(req, res){
    const friendsList = ["chandu", "shiva", "Sujith", "Mahender", "Rupesh"];
    res.render("friends", {friends : friendsList});
});
app.listen(3000, function(){
    console.log("Server started at port : 3000");
});