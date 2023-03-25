import express from 'express';

const router = express.Router()

router.post('/', (req, res) => {
    res.send('It is working...')
})

export default router