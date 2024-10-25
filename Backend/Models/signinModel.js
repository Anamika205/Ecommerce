const mongoose = require('mongoose');
const signinSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    }

})
const SignIn = mongoose.model('SignIn', signinSchema);
module.exports = SignIn;