const express = require('express')
const mongoose = require('mongoose')
const UserRouter = require('./Routes/UserRouter')
const dotenv = require('dotenv')

dotenv.config({path : './config/.env'})

const app = express()


app.use(express.json())


app.use('/api/users', UserRouter )

mongoose.connect(process.env.MONGO_URI)
.then(data=> console.log('DB is connected'))
.catch(err=> console.log(err))
 
const PORT = process.env.PORT;

app.listen(PORT, err=> err? console.log(err) : console.log(`the serveur is runing on ${PORT}`) )