import express from 'express'
const app = express()
const port = process.env.PORT || 5051

const moves = [
    "rock",
    "paper",
    "scissors"
]

app.get('/rps', (req, res) => {
    const choice = Math.floor(Math.random()*moves.length)
    const move = moves[choice]
    res.send(move)
})

app.listen(port, ()=>{
    console.log('server up on port', port)
})