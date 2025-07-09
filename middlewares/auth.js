
const jwt = require('jsonwebtoken');

exports.auth = async(req,res,next){
    
    try{
        const authHeader = req.headers['authorization'];

        const token = hedertoken.split(' ')[1];

        if(!token) return res.status(404).json({message:"Access Denied"});

        const isvalidToken = jwt.verify(token,SECRET_KEY);

        next();

        return res.status(201).json(isvalidToken);
    }
    catch(error){
        console.log("Token not found",error.message);
        res.status(500).json({message:"server side mei dikkat h"});
    }
}