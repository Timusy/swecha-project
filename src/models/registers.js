const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    gender :{
        type:String,
        required:true
    },
    phone :{
        type:Number,
        required:true,
        unique:true
    },
    age :{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    confirmpassword :{
        type:String,
        required:true
    },

    
})

// now we need to make collections
// Register is the class..so the first letter is to be capital
const Register = new mongoose.model("Register", userSchema);
module.exports = Register;