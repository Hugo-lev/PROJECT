const http = require("http");

const mongodb = require("mongodb")
let db;
const connectionString ="mongodb+srv://levssshe_db_user:VOvy8pPGeuSzR4Lt@cluster0.dtz7qft.mongodb.net/"
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
