const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post('/signup', function(req,res){
    res.json({
        message: "admin signup endpoint"
    })
})

adminRouter.post('/signin', function(req,res){
    res.json({
        message: "admin signin endpoint"
    })
})

adminRouter.post('/course', function(req,res){
    res.json({
        message: ""
    })
})

adminRouter.put('/course', function(req,res){
    res.json({
        message: ""
    })
})

adminRouter.get('/course', function(req,res){
    res.json({
        message: ""
    })
})