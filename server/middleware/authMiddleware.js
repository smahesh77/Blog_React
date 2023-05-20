// thie will run between comments to see if the user is actually logged in

const {verify} = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken")
    console.log(req.body.tokentest)
    console.log(req.header("test"))
    if(!accessToken) {
        return res.json({error: "User is not logged in"})
    }

    try {
        const validToken = verify(accessToken, "shhhhh its a secret")

        if(validToken){
            return next() // this will move forward you can give anything here like an other middleware
        }
    } catch (err) {
        return res.json({error: err})
    }
} 

module.exports = validateToken