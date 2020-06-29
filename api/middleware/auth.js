/* eslint-disable no-unused-vars */
const { JsonWebTokenError } = require('jsonwebtoken');

const jwt =require('jsonwebtoken');
module.exports = (req,res,next)=>{

    try{
        const token=req.headers.authorization.split(' ')[1];
        // eslint-disable-next-line no-undef
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.userData=decoded;
        next();
    }catch(error){
        return res.status(401).json({
            message:'Auth failed'
        });
    }
    
};