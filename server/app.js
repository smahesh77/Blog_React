const express = require('express')
const postRouter = require('./routes/postRoute')
const commentRouter = require('./routes/commentRoute')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json())
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
app.use('/posts', postRouter)
app.use('/comments', commentRouter)

module.exports = app