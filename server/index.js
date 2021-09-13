const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config({path:'./config.env'});

require('./db/connection');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

const User=require("./model/userSchema");

const middleware=(req,res,next)=>{
    console.log("hello from middleware");
    next();
}

app.get('/',(req,res)=>{
    res.send("from home");
});

app.get('/about',(req,res)=>{
    res.send("from home");
});

// app.get('/register',(req,res)=>{
//     res.send("from home");
// });

app.listen(PORT,()=>{
    console.log(`listening ${PORT}`);
})