import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const port = process.env.Port || 5000;
const app = express();
dotenv.config();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Testinh API
app.get('/',(req,res)=>{
    res.status(200).json({message:'Server is runing'})
});

// Sever Listen
app.listen(port,()=>{
    console.log('Server is runing on port:', port)
});