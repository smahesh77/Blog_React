const router = require('express').Router()
const { users } = require('../models') //this is the name of the table you give in postModel not the one that is being exported
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const {username , password} = req.body
    let hashedPass
    bcrypt.hash(password, 10).then(async (hash) => { // the hashed pass will be stored in hash
        const model = await users.create({
            username: username,
            password: hash
        })
        res.json(model)
    })
})

router.post('/login', async (req, res) => {
    const {username , password} = req.body
    
    const user = await users.findOne({where: {username: username}})
    console.log(user.password)
    if (!user) res.json({ error: "User Doesn't Exist" });

    bcrypt.compare(password, user.password).then((match) => { // to chech for pass
        if (!match) res.json({ error: "Wrong Username And Password Combination" });
    
        res.json("YOU LOGGED IN!!!");
      });
        

})



module.exports = router


