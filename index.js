require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.SERVER_APP_PORT


app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! my name is sharjeel ahmed')
})
app.get('/about', (req, res) => {
    res.send('about page')
})
app.get('/contact', (req, res) => {
    res.send('contact page')
})
app.get('/product', (req, res) => {
    res.send(["a", "b", "c"])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})