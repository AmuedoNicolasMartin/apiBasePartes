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

async function findMulti(name){
    return UserModel.find({name:name}).exec();
  }

const usuarioRoutes = express.Router();

//post example
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

//get example
usuarioRoutes.get('/', async(req,res)=>{
  const {name} = req.query;
  console.log(name);
  const user = await UserModel.find({name:name}).exec();
  if (!user){
    return res.status(404).send();
  }
  return res.json(user);
});


//patch example
usuarioRoutes.patch('/', async(req,res)=>{
  const { pass, name, activo } = req.body;
 
   const user = await findMulti(name);
     if(!user){
       return  res.status(404).json({error: 'Usuario inexistente.'});
     }
     
     for (var i = user.length-1; i >= 0; i--){
     bcrypt.compare(pass, user[i].pass, (err, Valid) => {
       i+=1; //tener en cuenta que Valid es boolean. hay que sumarle 1 pues al entrar resta 1 porque si.
       console.log(i);
       if (err){
         throw new Error(err)
       }
       console.log(Valid);
       if (Valid == true){
         console.log('Estado modificado correctamente.');
         user[i].activo = activo?true:false;
         user[i].save();
         return;
         //return res.status(200).json({mensaje: 'El estado fue modificado correctamente.'});
       }    
     });
     };
     return res.status(200).json({mensaje: 'Cambios de estado efectuados.', ival: i})
 });

export default usuarioRoutes;