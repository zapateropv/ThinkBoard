import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import router from "./routes/routes.js";
import dotenv from 'dotenv'
dotenv.config(); 

const PORT = process.env.PORT || 8000
const MONGOURL = process.env.MONGOURL


const app = express();
app.use(cors())
app.use(express.json())
app.use('/notes', router)

const connectDB = async (req, res) => {

    try {
        await mongoose.connect(MONGOURL)

        app.listen(PORT, () => {
            console.log('server is connected at port ' + PORT)
        })

      } catch (error) {
        res.status(404).send(error.message)
      }
}
connectDB()