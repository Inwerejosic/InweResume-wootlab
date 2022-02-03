const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'weseerd43rer56t78u*&uytgfr$$##bgfth'
const userAuthentication = async (req, res, next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
            const user = await User.findOne({_id: decodedToken['_id']});
            if(!user){
                return res.status(400).json('Access Denied')
            }else{
                req.user = user;
            }
        }catch(error){
            return res.status(400).json({'error': error})
        }
    }else{
        return res.status(401).json('Not Authorized')
    }
    
    next()
}

module.exports = userAuthentication;

// U2CCkhbz