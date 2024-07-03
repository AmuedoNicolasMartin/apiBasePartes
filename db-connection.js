const mongoose = require('mongoose');
const uri = process.env.DB;
const db = mongoose.connect(uri,
    { useUnifiedTopology: true,
      useNewUrlParser: true
    });

if (!db){
    console.log('Error: No se pudo conectar a la base de datos.')
}else{
    console.log('Your connection to dataBase was succesfull !!!')
}

module.exports = db;