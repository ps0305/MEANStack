//import the modules
var express = require("express");
var mongodb = require("mongodb");

//create router
var router =express.Router();

//create client
var ps=mongodb.MongoClient;

//post request
router.post("/",function(req,res){
    var old_product_name=req.body.p_o_name;
    var old_obj={p_name:old_product_name};
    var new_product_name=req.body.p_n_name;
    var new_obj={$set:{p_name:new_product_name}};
    //client connect
    ps.connect("mongodb://localhost:27017/nodedb",function(err,db){
    if (err){
        console.log("error while connecting from nodedb")
    }else{
        db.collection("products").updateOne(old_obj,
                                            new_obj,
                                            function(err,result){
            if(err){
                console.log("error while updating the record");
            }else{
                res.send({update:'success'});
                }
            });
        }
    });
});
module.exports=router;