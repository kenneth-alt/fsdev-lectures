import express from "express";

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (request, response) => {
	  response.send('Hello World, we die here!')
})
