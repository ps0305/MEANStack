//import the modules
var express = require("express");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");


//create the Rest Object
var app = express();

//Enable the CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Deploy the Angular Application into Server
app.use(express.static(__dirname+"/../MEANStack"));
//server automatically launches the "index.html" file by default

//set the json as mime type
app.use(bodyparser.json());


//set the form data as false
app.use(bodyparser.urlencoded({extended:false}));


//create the client
var ps = mongodb.MongoClient;


//create the Rest API
app.post("/insert",function(req,res){
    var my_obj = {p_id:req.body.p_id,
                  p_name:req.body.p_name,
                  p_cost:req.body.p_cost};
    ps.connect("mongodb://localhost:27017/nodedb",function(err,db){
        db.collection("products").insertOne(my_obj,function(err,result){
            if(err){
                console.log("Error while Inserting the Record !");
            }else{
                res.send({message:'record inserted successfully !'});
            }
        });
    });
});


//Assign the port no.
app.listen(8080);
console.log("Server Listening the port no.8080");