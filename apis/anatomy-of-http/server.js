const express = require('express');
const app = express();

app.use(express())
app.use(express.urlencoded())

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


app.get('/*', (req, res) => {
    console.log('Path:', req.path);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    res.send("Hello home!");
  });

app.post('/pa*', (req, res) => {
    console.log('Path:', req.path);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    res.send('Posted successfully');
})