import express from "express";
import { testRouter } from './testRouter.js'

const app = express();
const PORT = 5050;

app.use(express.json())

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (request, response) => {
	  response.send('The server is up...\n')
})

app.use('/test', testRouter)






app.get("/path2", (request, response) => {
    response.send('This is path 2 <br /> ...and this is a line break')
})

app.get('/object', (req, res) => { 
    res.send({Hello: "World"})
})

app.get("/spicy", (request, response) =>
// "currentDate": "Friday, October 14, 2022 10:42AM"
  response.json({
    currentDate: new Date().toLocaleDateString("en-us", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
    }),
  })
);

app.get('/forest', (req, res) => {

let daylight = req.query.daylight;
let numberOfDragons = req.query.numberOfDragons;

    if (daylight == "true") {
        res.send("You're in a decently lit wood");
    } else {
        res.send("You're in a deep dark wood");
    } 
})

app.get("/dragon", (request, response) => {
    let dragons = request.query.dragons;
    let numberOfDragons = request.query.numberOfDragons;
  
    console.log("dragons is", dragons);
    console.log("numberOfDragons is(", numberOfDragons, ")");
    if (numberOfDragons === undefined) {
      return response.send("Please enter numberOfDragons");
    }
    if (dragons == "true") {
      response.send(
        "You are in a deep, decently lit wood..." +
          "with " +
          (+numberOfDragons > 500 ? "A lot of" : numberOfDragons) +
          " dragons"
      );
    } else {
      response.send(
        "You are in a deep, dark wood..." +
          "with " +
          (+numberOfDragons > 500 ? "A lot of" : numberOfDragons) +
          " dragons"
      );
    }
  });