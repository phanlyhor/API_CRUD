const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')


const router = require('./routes/route')

dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())
db.connect

app.use('/api' , router)


const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`http://localhost:${port}`)
})
