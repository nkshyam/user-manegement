const mongoose=require("mongoose")
require('dotenv').config();


mongoose.connect(process.env.MONGOURL,{useNewUrlParser:true,useUnifiedTopology:false})
.then(()=>{
   console.log("connected..........");
})
.catch((err)=>{
   console.log("not connected",err);
})


const users=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },

})
const collection= new mongoose.model('users',users);
module.exports = collection;