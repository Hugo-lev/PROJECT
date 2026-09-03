console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const Item = mongoose.model('Item')

const fs = require("fs");

//MONGODBNI CHAQRISH

const db = require("./server").db();
const mongodb =require("mongodb")

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.post("/create-item",(req,res) => {
  console.log("user enter to create-item")
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja:new_reja},(err, data)=>{
   console.log(data.ops);
   res.json(data.ops[0]);
  });
});
app.post("/delete/item",(req, res) => {
  const id= res.body.id;
  // console.log(id);
  db.collection("plans").deleteOne({id:new mongodb.Object(id)},
  function(err,data){
    res.json({state:"success"});
    });

})

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("usr entered")
  db.collection("plans")
  .find()
  .toArray((err,data) =>{
    if(err){
      console.log(err);
      res.end("somthing went wrong")
    } else{
      console.log(data);
      res.render("reja",{items:data});
    }
  });
});

module.exports =app;



