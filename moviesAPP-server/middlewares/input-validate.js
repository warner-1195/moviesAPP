const { response } = require("express");
const { validationResult } = require('express-validator')

const inputValidate = (req, res = response, next ) =>{
    const inpuErrors = validationResult(req);
    if( !inpuErrors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            inpuErrors: inpuErrors.mapped()
        })
    }

    next();
}

module.exports = {
    inputValidate
}