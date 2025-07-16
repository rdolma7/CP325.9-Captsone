import express from "express"
import 'dotenv/config'

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req,res)=>{
res.json("Testing!")
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})