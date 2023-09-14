const express = require('express')
const path = require('path')
const app = express();
const port =80;

// for serving static file 
app.use('/static',express.static('static'))

// set the template engine as pug 
app.set('view engine', 'pug')

// set the views directory 
app.set('views',path.join(__dirname,'views'))

// our pug demo end point
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Thanks for telling me how to use pug engine ' })
  })

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

