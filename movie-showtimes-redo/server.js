import express from 'express';

import showtimesRouter from './routes/showtimesRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});

app.use('/showtimes', showtimesRouter);
