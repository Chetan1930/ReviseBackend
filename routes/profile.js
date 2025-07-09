const route = require('express').Router();


route.get('/profile',,(req,res)=>{
    res.send("Hello my dear friend");
})