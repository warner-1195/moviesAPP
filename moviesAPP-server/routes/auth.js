const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, login, renewToken }  = require('../controllers/auth');
const { inputValidate } = require('../middlewares/input-validate');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();



//create user

router.post('/register',[
    check('name', 'names is required').not().isEmpty(),
    check('lastname', 'lastname is required').not().isEmpty(),
    check('email', 'enamil is required').isEmail(),
    check('password', 'password is required').isLength({ min: 7 }),
    inputValidate

] , createUser);

//login user

router.post('/', [
    check('email','email is required').isEmail(),
    check('password', 'password is required').isLength({ min: 7 }),
    inputValidate
], login);


//token validator

router.get('/renew',validateJWT , renewToken );








module.exports = router;