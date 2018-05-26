//import the modules
var express = require("express");
var mongodb = require("mongodb");

//caeate router
var router =express.Router();

//create client
var ps=mongodb.MongoClient;

//post request,RESt API
router.post("/",function(req,res){
    var id = req.body.p_id;
    var delete_obj= {p_id:id}
    //client connect
    ps.connect("mongodb://localhost:27017/nodedb",function(err,db){
        if (err){
            console.log("error while connecting to db")
        }else{
            db.collection("products").deleteOne(delete_obj),function(err,result){
                if(err){
                    console.log("error while deleting the record");
                }else{
                    res.send({'delete':success});
                }
            });
        }
    });
   module.exports=router;