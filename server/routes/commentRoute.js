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
    const username = req.user.username;
    comment.username = username; 
    console.log(comment)
    console.log(req.body.test)
    await comments.create(comment)
    res.status(200).json(comment)
})


router.delete("/:commentId", validateToken, async (req, res) => {
    const commentId = req.params.commentId;
    console.log(commentId)
    console.log("HHHHHHEEEEEEEEELLLLLLLLLLLOOOOOO")
    await comments.destroy({
      where: {
        id: commentId,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });

module.exports = router