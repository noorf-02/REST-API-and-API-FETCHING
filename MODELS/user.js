// models are where we create our schemas 
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    ProductName:{
        type:String,
    },
    ProductDescription:{
        type:String,
    },
    Price:{
        type:String,
    },
    Image:{
        type:String,
    },
})

//after creating the schema we convert it into a model 

const product = mongoose.model('product',productSchema );
module.exports = product;