var express = require('express');
const UserModel = require('../models.js').User;
const bcrypt = require('bcrypt');

async function createUser(pass,email,name,age,fecha,activo){
    const newUser = new UserModel({
        pass: await bcrypt.hash(pass, 12),
        email: email,
        name: name,
        age: age,
        fecha: fecha,
        activo: activo,
    });
    
    const savedUser = await newUser.save();
    return savedUser;
}

async function findEmail(email){
    return UserModel.findOne({email:email}).exec();
  }
const usuarioRoutes = express.Router();

usuarioRoutes.post('/',async(req,res)=>{
    const {
        pass,
        email,
        name,
        age,
        fecha,
        activo,
      } = req.body

      const foundUser = await findEmail(email);
      if (!foundUser){
        const user = createUser(pass,email,name,age,fecha,activo?true:false);
        if (!user){
          return res.status(404).json({mensaje:'Error creando el usuario.'});
        }
        return res.status(200).json({mensaje:'El usuario se creo correctamente.'});
     }else{
      return res.status(404).json({mensaje:'El usuario ya existe.'});
     }
});


export default usuarioRoutes;