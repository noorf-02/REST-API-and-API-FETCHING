// in controller we add the functions to create those products

// we first destructure the variables from our schema first and then text it into postman and mongodb
// we also have to tell the main server that the data is in json formar
// the image can not be in the json format 

const product = require('../MODELS/products');

const createProduct = async (req,res) =>{
    const {ProductName, ProductDescription, Price, Image, Category} = req.body;
    // this means that the schema has been destructured
    const createdProduct = await product.create({ProductName:ProductName, ProductDescription:ProductDescription, Price:Price, Image:Image, Category:Category});
    res.send(createdProduct);
}

// this is to get the products in the API format that can be fetched in the front end later on

const getProduct = async (req,res)=>{
    const data = await product.find({});
    res.send(data);
}

module.exports = { createProduct, getProduct };

// this function is sent to the routes so the function can be applied to the register route