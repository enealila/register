var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
    username :{
        type:String,
        index:true
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    name:{
        type:String
    }
});
var User = module.exports = mongoose.model('User',UserSchema);
module.exports.createUser = function(newUser,callback){
    bcrypt.genSaltSync(10,function(err,salt){
        bcrypt.hashSync(newUser.password, salt,function(err,hash0){
        newUser.password = hash;
        newUser.save(callback);
        });
    });
    
};