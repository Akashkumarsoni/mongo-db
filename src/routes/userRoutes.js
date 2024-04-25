const express = require("express");
const route = express.Router();
const user = [
    {
        id:'001',
        name:'AKS'
    },
    {
        id:'002',
        name:'AKG'
    },
    {
        id:'003',
        name:'AUG'
    }
]
route.use("/user",(req,res)=>{
    try{
        res.status(200).json({
            success: true,
            description : "ROutes are working",
            data : user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            description : "Error occurs",
            data : "No data found"
        })
    }
});
route.use("/user/:userID",(req,res)=>{
    const uid = req.param;
    console.log(uid);
    try{
        res.status(200).json({
            success: true,
            description : "ROutes are working",
            data : user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            description : "Error occurs",
            data : "No data found"
        })
    }
});
module.exports = route;