var express = require('express');
var router = express.Router();

//get homepage
router.get('/',function(req,res){
    res.render('login.ejs');
});
router.get('/login',function(req,res){
    res.render('login.ejs');
});
router.get('/index',function(req,res){
    res.render('index.ejs');
});
router.get('/register',function(req,res){
    res.render('register.ejs');
});
module.exports =router;