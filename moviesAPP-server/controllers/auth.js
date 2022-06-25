const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const  createUser = async( req , res = response ) => {

    const {name,lastname,email,password} = req.body;

    try {
        
   //email verification
        const user = await User.findOne({ email });

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'this email is already in use'
            });
        }
    
    //create user whit the model    

      const  dbUser = new User( req.body );

    //password hash
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt );

    //generate JWT

        const token = await generateJWT(dbUser.id, name);

    //Create user in DB

    await dbUser.save();
    


    //generate resp 

    return res.status(201).json({
        ok: true,
        uid: dbUser.id,
        name,
        lastname,
        token
    })

    } catch (error) {
        console.log(error)
        return res.json({
            ok: true,
            msg: 'Error'
        });
    }

 
}

const login = async( req , res = response) => {

    const {email,password } = req.body;

    try {

        // email validation

        const dbUser = await User.findOne({email});

        if( !dbUser ){
            return res.status(400).json({
                ok: false,
                msg: 'The email is not valid'
            });
        }

        //pasword validation
     
        const validPassword = bcrypt.compareSync( password, dbUser.password);
        
        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'the password is not valid'

            });
        }

        //generate the JWT

        const token = await generateJWT(dbUser.id, dbUser.name)


        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token

        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'talk with the administrator'
        });
    }

}

const renewToken = async( req , res = response) => {

    const { uid, name } = req;
    

    const token = await generateJWT(uid,name)


    return res.json({
        ok: true,
        uid,
        name,
        token
        
    });

}


module.exports = {
    createUser,
    login,
    renewToken

}