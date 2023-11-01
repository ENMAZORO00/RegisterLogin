const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/demo')
.then(()=>{
    console.log(`database connect`);
})
.catch((error)=>{
  console.log(error);
})

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type:String,
        unique: true,
        required: true,
    },
    phone: {
        type : Number,
        required:true,
    },
    password : {
        type:String,
        required:true,
    },
});

const User = mongoose.model('User',userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo',async (req,res)=>{
    let user =new User();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = req.body.password;
    const doc=await user.save();

    console.log(doc);
    res.json(doc);
})

server.listen(8080,()=>{
    console.log('server started');
})