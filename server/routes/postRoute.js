const router = require('express').Router()
const { Posts } = require('../models') //this is the name of the table you give in postModel not the one that is being exported

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





// a little gift for the future

// Post.findAll({
//     where: {
//       [Op.or]: [
//         { attribute1: value1 },
//         { 
//           [Op.and]: [
//             { attribute2: value2 },
//             { attribute3: value3 },
//             // Add more conditions as needed
//           ],
//         },
//         // Add more OR conditions as needed
//       ],
//     },
//   })
//     .then((results) => {
//       // Handle the results
//       console.log(results);
//     })
//     .catch((error) => {
//       // Handle any errors
//       console.error(error);
//     });