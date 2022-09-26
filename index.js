const express= require("express")
const cors=require("cors")
const morgan=require("morgan")
const path=require("path")
// require("dotenv").config({path:"./.env.local"})

const app=express()
if(process.env.NODE_ENV==="production"){
app.use(express.static(path.join(__dirname,"client","build")))

app.use("*",(req,res)=>{
res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})
}
app.listen(3001,()=>console.log("Listening on port 3001"))