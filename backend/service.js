import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/dbConnect.js'
import connectCloudinary from './config/cloudinary.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
connectDb();
connectCloudinary();

app.get('/',(req,res)=>{
    res.send('asp aosfoan')
})

app.listen(port,()=>{
    console.log("Server is working on port : " + port);
})