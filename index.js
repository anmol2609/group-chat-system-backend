let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')
const app = express()
app.listen('4000',()=>{
    console.log("connected to port",4000)
})
app.use('/',(req,res,next)=>{
    res.status(200).send('connected')
})