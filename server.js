const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const connectDB = require('./CONNECTDATABASE/dbconnect');
const Router = require('./ROUTES/products');

app.use(express.json());
connectDB();


app.use('/', Router);
app.all('/*path', (req,res)=>{
    res.send('This page does not exist')
})
app.get('/', (req,res)=>{
    res.send('HI USERS!')
})
app.listen(port, ()=>{
    console.log(`The app is running on ${port}`)
})

