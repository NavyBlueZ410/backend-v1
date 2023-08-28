const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json()) 
app.use(cors())

const userRouter = require('./route/user')
const userEmail = require('./route/email')

app.use(userRouter)
app.use(userEmail)


app.listen(5000,() => { console.log('Server is running is port 5000 .....') })