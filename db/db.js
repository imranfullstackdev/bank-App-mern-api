const mongoose = require("mongoose");
const db=process.env.DB
mongoose.connect(db,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
}).then((res)=>{
    console.log("connected sucessfully");
}).catch((err)=>{
    console.log(err);
})
module.exports=mongoose