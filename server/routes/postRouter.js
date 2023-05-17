const router = require('express').Router()
const { Posts } = require('../models')

router.get('/get', (req, res) => {
    res.json({message: "Hello world"})
})

router.post('/post', async (req, res) => {
    const post = req.body;
    console.log(post)
    await Posts.create(post)
    res.status(200).json(post)
})

module.exports = router