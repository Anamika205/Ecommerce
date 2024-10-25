const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username:{
        type:String,
        require:false,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        minlength:8
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const Login = mongoose.model('Login', loginSchema);
module.exports = Login;