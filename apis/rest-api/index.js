import express from 'express'

const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.send('Server is up...')
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})

app.listen(port, () => console.log(`listening on port ${port}`))

