var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
  username:{
    type: String,
    index: true
  },
  password:{
    type: String
  },
  email:{
    type: String
  },
  name:{
    type: String
  }
});

var User = module.exports = mongoose.model('User', UserSchema);


module.exports.createUser = function(newUser,callback) {
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      console.log(newUser.password); 
      newUser.password = hash;
      console.log(newUser.password); 
        newUser.save(callback);
    });
});}


module.exports.getUserByUsername = function(username,callback){
    var query = {username: username};
    console.log(query);
    User.findOne(query,callback);
}
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword, hash, function(err,isMatch){
      console.log(candidatePassword);
    if(err) throw err;
    callback(null, isMatch);
    console.log(isMatch);
    });
}