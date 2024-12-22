import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000 ;

// middlewares 

app.use(express.json());
app.use(cors());

app.get('/' , (req,res)=>{
  res.send("Welcome to aur backend!")
})

app.listen(PORT , ()=>{
    console.log(`App is listening on port ${PORT}`)
})