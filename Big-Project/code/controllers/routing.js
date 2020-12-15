const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const projectModel =  mongoose.model("project");

router.get("/",(req,res)=>{

    res.render("login_page");
})

router.post("/",(req,res)=>{
  
    projectModel.find(req.body,(err, docs)=>{ 
        if(!err){
            res.render("list",{data :docs});
           // console.log(docs);
         
        }
        else{
         res.send(err);
        }
     }
    )


})

module.exports = router;