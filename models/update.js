const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('update',updateSchema);