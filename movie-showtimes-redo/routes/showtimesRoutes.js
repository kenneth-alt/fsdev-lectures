import express from 'express';
import { createShowtime, listShowtimes } from '../models/showtimes.js';

const router = express.Router()

router.post('/', async (req, res) => {
    const newShowtime = req.body;
    try {
        const id = await createShowtime(newShowtime);
        res.send(`Success, added ${newShowtime.movieTitle} - ${id}`);
    } catch (error) {
        res.send(403).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const allShowtimes = await listShowtimes();
        res.send(allShowtimes);
        } catch (error) {
        res.send(404).send(error.message);
    }
});

export default router