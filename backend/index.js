const express=require('express');
const app=express();
const connectDB=require('./src/Database/db');
const userRouter=require('./src/Controllers/user');

require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;
const url=process.env.MONGODB_URI || "abc";
console.log(port)
app.listen(port,async ()=>{
    console.log(`Server is running on port ${port}`);
    try{
        await connectDB(url);
    }catch(error){
        console.log(error);
    }
})

app.use(express.json());   

app.use('/auth',userRouter);
app.use('/product',productRouter);

app.get('/',(req, res)=>{
    res.send("Hello world");
})