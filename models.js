const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    pass:{type:String, required:true},
    email:{type:String, required:true},
    name:{type:String, required:true},
    age:{type:Number, required:true},
    fecha:{type:Date, required:true},
    activo:{type:Boolean, required:true},
});

const User = mongoose.model('User', UserSchema);

exports.User = User;