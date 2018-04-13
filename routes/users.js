var express = require('express');
var router = express.Router();

//register
router.get('/register',function(req,res){
    res.render('register');
});

//login
router.get('/login',function(req,res){
    res.render('login');
});

//register user
router.post('/register',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;            
    var password = req.body.password;
    var password2 = req.body.password2;
    
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Confirm Password is required').notEmpty();
    req.checkBody('password2', 'Confirm Password Must Matches With Password').equals(req.body.password);
    var errors = req.validationErrors();
    if(errors){
        res.render('users/register',{
            errors:errors
        });
    } else {
        console.log('passed');
    }
    


});
module.exports =router;