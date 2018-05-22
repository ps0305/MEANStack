//importing the modules
var express = require("express");
var bodyparser = require("body-parser");
var mongodb = require("mongodb");

//create the REST object
var app = express();

//enable the CORS(enabling communication between different ports)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();//next=>middleware
  });

//Deploying the angular application into server
app.use(express.static(__dirname+"/../MEANStack"));
//server automatically launches the index.html

//set JSON as MIME type
app.use(bodyparser.json());

//Setting form data as false
app.use(bodyparser.urlencoded({extended:false}));

//Create the Client
var ps = mongodb.MongoClient;

//Create the RESt API
app.post("/insert",function(req,res){
    var my_obj={
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_cost:body.p_cost
    };
    ps.connect("mongodb://localhost:27017/nodedb",function(err,db){
        db.collection("products").insertOne(my_obj,function(err,result){
            if(err){
                console.log("Error while inserting the data")
            }else{
                res.send({message:"records inserted successfully"});
            }
        });
    });

});