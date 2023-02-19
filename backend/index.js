const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const userModel=require("./models");
app.use(cors());

mongoose.connect('mongodb+srv://user:user@cluster0.qijnmd9.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/",async(req,res)=>{
    const {name,email,year,domain,admission_no,phone_no}=await req.body
    const user= new userModel({
        _id:new mongoose.Types.ObjectId,
        name:name,
        email:email,
        year:year,
        domain:domain,
        admission_no:admission_no,
        phone_no:phone_no
    })
    user.save().then(use => {
        console.log(`${use} has registered successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    .then((response)=>console.log(response))
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))