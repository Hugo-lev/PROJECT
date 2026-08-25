console.log ("web server start");
const express = require("express");
const app = express();
const http = require("http");

//1 krish
// 1 shart expressga krib kelayotgan malumotlarga oid bolgan kodlar yoziladi.
app.use(express.static("public")); //public = appga krib kelayotgan zaproslar public folderni kora oladi degan manoni anglatadi
app.use(express.json()); //json bu yerda krib kelayotgan datalarni json formatga ogrib beradi.
app.use(express.urlencoded({extended: true})); 

// 2 session code

//3 backanda view yasaymiz viewsga oid kodlar
app.set("views", "views");
app.set("view engine", "ejs");

//4 rooterlaarga mojalangan codelar
app.get( "/Giftshop", function(req, res) {
    res.end(`<h1 style = "background: grey"> WELCOME TO OUR GIFTS SHOP </h1>`);
} );
app.get( "/gift", function(req, res) {
    res.end( "<h1> You are  at gifts page </h1>");
} );

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`the server is running successfully on port: ${PORT}`);
});

//biz bu yerda backendni ichida ejs framework yordamida frontet qurish va traditional usuli bor


