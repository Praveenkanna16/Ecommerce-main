const express=require('express');
const app=express();
const connectDB=require('./src/Database/db');
const userRouter=require('./src/Controllers/user');

require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;
const url=process.env.db_url;

app.listen(3000,async ()=>{
    console.log(`Server is running on port ${port}`);
    try{
        await connectDB(url);
    }catch(error){
        console.log(error);
    }
})

app.use(express.json());

 app.use('/auth',userRouter)