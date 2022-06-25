const { response, request } = require("express");
const jwt = require('jsonwebtoken')



const validateJWT = (req  , res = response, next) =>{

    const token = req.headers['x-token']

    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'token error'
        });
    }

    try {

        const { uid,name } = jwt.verify(token, process.env.SECRET_JWT_SEED )
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token not valid'
        });
    }

    next();

}

module.exports = {
    validateJWT
}
