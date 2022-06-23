import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const port = process.env.Port || 5000;
const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json('Backend is runing')
})
// dummy route
app.listen(port,()=>{
    console.log('Server is runing at port', port)
});