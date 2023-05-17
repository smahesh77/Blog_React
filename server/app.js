const express = require('express')
const postRouter = require('./routes/postRouter')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json())
app.use('/posts', postRouter)

module.exports = app