const http = require("http");

const mongodb = require("mongodb")
let db;
const connectionString = "mongodb+srv://savdospace99_db_user:s13vurcv1RJ15rTA@cluster0.jhccpn0.mongodb.net/"
mongodb.connect(connectionString, {useNewUrlParser: true,useUnifiedTopology: true},
    (err,client) =>{
     if(err) console.log("ERROR on connection MongoDb")  ;
     else {
        let PORT = 3000;
        console.log("MongoDb connection succesfully")
        module.exports = client
        const app = require("./app");
        const server = http.createServer(app);

        server.listen(PORT, function () {
            console.log(`Server is running: ${PORT}, http://localhost:${PORT}`);
});
     }
    }
);
