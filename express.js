var express = require('express')
var app=express()

app.get('/', function(req,res)
{
    res.write('<h1>Hello World</h1>')
    res.end()
})

app.listen(8000,()=>console.log('Server is running in the port 8000'))
