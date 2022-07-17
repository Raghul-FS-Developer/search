var mongoose =require("mongoose");
const {Schema} = mongoose

const data = new Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String
})

module.exports = mongoose.model("user", data);