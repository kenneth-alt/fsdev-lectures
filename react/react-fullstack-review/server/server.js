import express from 'express'

const app = express()
const port = 2012

app.use(express.json())

app.use('/api', (req, res) => {
    res.send('Hello world');
  });

app.listen(port, () => console.log(`Server started on port ${port}`))