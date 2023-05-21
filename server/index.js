const express = require('express')
const app = require('./app')
const db = require('./models')

require('dotenv').config()

const port = process.env.port || 4000;


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening to port ${port}`)
    })
}).catch((err) => {
    console.log(err);
});


