const express = require('express')

const app = express();
const port =80;

app.get("/",(req,res)=>{
 res.send("this is my first express app with Arvind")
});

app.get("/about",(req,res)=>{
    res.send("this is my first about express app with get request ")
});

app.post("/about",(req,res)=>{
    res.send("this is my first about post requeist")
});

app.listen(port,()=>{
    console.log(`the Aplication started successfully on port ${port}`)
})

