const express = require("express")
const app = express()

const PORT = 3000







// ROUTES -----------------------------------------------
app.get('/greeting', ( req, res ) => {
    res.send(`<h1>Hello, stranger</h1>`)
})

app.get(`/greeting/:name`, ( req, res ) => {
    res.send(`<h1> What's up ${req.params.name}! Its so great to see you </h1>`)
})

app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}!! Go catch it`)
} )