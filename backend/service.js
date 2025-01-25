import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/dbConnect.js'
import connectCloudinary from './config/cloudinary.js'
import doctorRouter from './routes/adminRoute.js'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
connectDb();
connectCloudinary();


//Add routers
app.use('/api/admin',doctorRouter);

app.listen(port,()=>{
    console.log("Server is working on port : " + port);
})