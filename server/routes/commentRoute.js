const router = require('express').Router()
const validateToken = require('../middleware/authMiddleware')
const { comments } = require('../models') // since we make a model called comments in our commentModel

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId
    const comment = await comments.findAll({where: {PostId : postId}})
    res.status(200).json(comment)

})

router.post('/',validateToken, async (req, res) => { // this will go to validateToken middleware first and validate and only post the comment if the token is valid
    const comment = req.body;
    console.log(comment)
    await comments.create(comment)
    res.status(200).json(comment)
})

module.exports = router