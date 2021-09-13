const express=require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("from home auth");
});




router.post('/register',(req,res)=>{
  //  res.send("from home");
    console.log(req.body);
    res.json({ message: req.body });
});

module.exports = router;