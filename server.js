require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(express.json)

const users = []
const post = [
    {
        username: 'Kaden',
        title: 'cupcakes'
    }
    ,{
        username: 'Kaden',
        title: 'Cookies'
    }
]

app.get('/post', authenticateToken, (req, res) => {
    res.json(post.filter(post => post.username === req.user.name))

 
})

//authenticate

function authenticateToken(req, res, next) {
    const authHeader = req.headers['Authorization']
    const token = authHeader &&  authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(1066)