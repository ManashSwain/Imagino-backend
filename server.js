import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';

const app = express();
const PORT = process.env.PORT || 4000 ;

dotenv.config();
 await connectDB();

// middlewares 

app.use(express.json());
app.use(cors());

app.get('/' , (req,res)=>{
  res.send("Welcome to aur backend!")
})

app.listen(PORT , ()=>{
    console.log(`App is listening on port ${PORT}`)
})