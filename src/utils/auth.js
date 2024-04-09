require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(express.json())

let refreshTokens =[]

app.post('/token', (req, res) => {
  const refreshToken  = req.body.token
  if(refreshToken == null) res.sendStatus(401)
  if(refreshToken.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accesstoken})
    })
})
//deletes access tokens
app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.post('/users', async (req, res) => {
    try { 
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
    } catch {
        res.status(500). send()
    }
})
//Auth User
app.post('/users/login', async (req, res) => {
    const users = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    }   catch {
        res.status(500).send()
    }
    const username = req.body.username
    const user = {name: username}

    //JWT CODE
    const accessToken = generateAccessToken(user)
    const refreshToken= jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    //refresh tokens for database
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
}) 

function generateAccessToken(user) {
  return  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })   
}

app.listen(3000)
