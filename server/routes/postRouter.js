const router = require('express').Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

router.get('/ById/:id', async (req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id) // find bt primary key
    res.status(200).json(post)

})

router.post('/', async (req, res) => {
    const post = req.body;
    console.log(post)
    await Posts.create(post)
    res.status(200).json(post)
})

module.exports = router