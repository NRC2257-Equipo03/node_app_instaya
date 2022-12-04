const express = require('express');
const RegisterSchema = require('../models/Register');
const router=express.Router();
//Crear usuario
router.post('/register.route',(req,res) =>{
    const Register = RegisterSchema(req.body);
    Register
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))   
});

module.exports = router;