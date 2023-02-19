const mongoose=require("mongoose");
const Signup=new mongoose.Schema({
    id:{type:Number},
    name:{type:String,required : true},
    email:{type:String,required : true},
    year:{type:String,required : true},
    domain:{type:String,required : true},
    admission_no:{type:String,required : true},
    phone_no:{type:String,required : true}
})
const user_details=mongoose.model('user_details',Signup)
module.exports=user_details