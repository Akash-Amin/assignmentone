const express=require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/connection");
const User = require("../model/userSchema")

router.get('/',(req,res)=>{
    res.send("from home auth");
});

router.post('/register', async (req,res)=>{
  
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error : "scemantic error"});
    }
    try{
        const userExist = await  User.findOne({email});

        if(userExist)
        {
            return res.status(422).json({error : "email already taken"});
        }
        else if(password != cpassword)
        {
            return res.status(422).json({error : "password n cpassword doesnt match"});
        }
        else{
            const user =new User({name,email,phone,work,password,cpassword});
            res.status(201).json({message : "email sucessfully registered"});
    
            await user.save();
    
            res.status(201).json({message : "email sucessfully kkkk registered"});
        }
    }catch(err){
        console.log("auuth",err);
    }
});

router.post('/signin', async (req,res)=>{
    try{
        const {email , password } = req.body;

        if(!email || !password )
        {
            res.status(400).json({error : "invalid "})
        }
        const userLogin = await User.findOne({email : email});
        //console.log(userLogin);
        if(userLogin){

            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();

            console.log("auuth-token",token);


            res.cookie("jwtoken",token,{

                 expires:new Date(Date.now() + 10000000000),
                 httpOnly : true
             });

            if(!isMatch)
            {
                res.status(400).json({error : "user pass error" })
            }else {
                res.json({message : "user login sucessfull" })
            }
        }else{
            res.status(400).json({error : "user error" })

        }
    }
    catch(err){ console.log("auuuth",err); }
})

module.exports = router;