const express = require("express")
const app = express()

const PORT = 3000

const magicResponses = require("./models/magicResponses")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  } // mdn thank you

// ROUTES -----------------------------------------------
app.get('/greeting', ( req, res ) => {
    res.send(`<h1>Hello, stranger</h1>`)
})

app.get(`/greeting/:name`, ( req, res ) => {
    res.send(`<h1> What's up ${req.params.name}! Its so great to see you </h1>`)
})

app.get('/tip/:total/:tipPercentage', ( req, res ) => {
    res.send(`<h1> Expected tip is: ${(req.params.total * (req.params.tipPercentage / 100)) } </h1>`)
} )

app.get('/magic/:question', ( req, res ) => {
    res.send(`
    <h1> QUESTION: <span style="font-weight: normal">${req.params.question}</span> </h1>
    <p style="text-align: center"> ${magicResponses[getRandomInt(0, magicResponses.length)]} <p>
    `)

})






app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}!! Go catch it`)
} ) 