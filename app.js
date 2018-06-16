const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
let friendsList = ["chandu", "shiva", "Sujith", "Mahender", "Rupesh"];
app.get("/", function(req, res){
    res.render("home");
});
app.post("/addfriend", function(req, res){
    const newFriend = req.body.newFriend;
    friendsList.push(newFriend);
    res.redirect("/friends");
});
app.get("/friends", function(req, res){
    res.render("friends", {friends : friendsList});
});
app.listen(3000, function(){
    console.log("Server started at port : 3000");
});