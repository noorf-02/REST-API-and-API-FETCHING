const mongoose = require('mongoose');

function connectDB (){
    mongoose.connect(process.env.URL).then(()=>{
        console.log('DB Connected Successfully');
    }).catch(err=>{
        console.log('Error in DB Connection');
    })
};

module.exports = connectDB; 