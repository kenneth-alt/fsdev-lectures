import express from "express";

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (request, response) => {
	  response.send('Hello World, we die here!')
})

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

app.get('/dragon', (req, res) => {
    let numberOfDragons = req.query.numberOfDragons;
    
        if (dragons == "true") {
            res.send(
             "You're in a decently lit wood" + 
             "with" + 
             numberOfDragons + 
             " dragons");
        } else {
            res.send("You're in a deep dark wood");
        } 
    })

