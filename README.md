#### Simple MEANStack example

#### Simple app to Add, Update, Remove, Create records using MEAN Stack.

 obj = [
    ```{label: 'p_id', key: 111},```
    ```{label: 'p_name', key: 'p_one'},```
    ```{label: 'p_cost', key: '10000'}```
];

//RESt API for inserting object

`app.post("/insert",function(req,res){
    var my_obj = {p_id:req.body.p_id,
                  p_name:req.body.p_name,
                  p_cost:req.body.p_cost};
                  
    nareshIT.connect("mongodb://localhost:27017/nodedb",function(err,db){
        db.collection("products").insertOne(my_obj,function(err,result)
        {
        if(err){
                console.log("Error while Inserting the Record !");
            }else{
                res.send({message:'record inserted successfully !'});
            }`
