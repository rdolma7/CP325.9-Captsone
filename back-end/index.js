import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"
import journal from "./models/journal.js"


const app = express()
const port = 3000

app.use(express.json());

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to Database")

app.get('/', (req,res)=>{
res.json("Testing!")
})

app.get('/journal', (req,res)=>{

})

// app.get('/parent', (req,res)=>{

// })

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})