import express from 'express';
import data from './data';
const app=express();

app.get("/api/products", (req,res)=>{
    res.send(data.products);
});

const cors = require('cors');
app.use(cors());

// Server listens on port # and prints message
app.listen(3000, ()=> {console.log("Server started running")})