const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
    sendingAmount:{
        type:Number,
        require:true
    },
    RecievedAmount:{
        type:Number,
        require:true
    },
    SenderName:{
        type:String,
        require:true
    },
    ReceiverName:{
        type:String,
        require:true
    },
    purpose:{
        type:String,
        require:true
       
    }
})
module.exports=mongoose.model('model',UserSchema)