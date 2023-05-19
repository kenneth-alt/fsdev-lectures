import express from 'express'
import { getData } from './data/data.js'

const app = express()
const port = 2012

app.use(express.json())

app.get('/api', (req, res) => {
    res.send('Hello world');
  });

app.get('/api/data', (req, res) => {
  res.send(getData())
});



app.listen(port, () => console.log(`Server started on port ${port}`))