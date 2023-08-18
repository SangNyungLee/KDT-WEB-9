const express = require('express')
require('dotenv').config()
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT, (req,res)=>{
    console.log(`http://localhost:${PORT}`)
})