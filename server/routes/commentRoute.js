const router = require('express').Router()
const { comments } = require('../models') // since we make a model called comments in our commentModel

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId
    const comment = await comments.findAll({where: {PostId : postId}})
    res.status(200).json(comment)

})

router.post('/', async (req, res) => {
    const comment = req.body;
    console.log(comment)
    await comments.create(comment)
    res.status(200).json(comment)
})

module.exports = router