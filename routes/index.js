var express = require('express');
var router = express.Router();
const mongoose=require('mongoose')
var user  = require('../model')
/* GET home page. */
require('dotenv').config()

const URL =  process.env.URL
mongoose.connect(URL).then(()=>console.log('db connected'))

router.get('/', async(req, res)=> {

  try{
    let Users = await user.find()

    const { q } = req.query;

    const keys = ["first_name", "last_name", "email"];
  
    const search = (data) => {

      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(Users).slice(0, 40)) : res.json(Users.slice(0, 40));
  }catch(err){
 console.log(err)
  }
});


module.exports = router;
