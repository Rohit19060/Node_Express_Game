// Imports
const express = require(`express`);
const bodyParser = require(`body-parser`);
const Game = require(`./game`);
const app = express();

app.use(express.static(`docs`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Post request handler and response as json
app.post(`/element`, function (req, res) {
  let uInput = req.body.type;
  let newObj = new Game();
  let resData = newObj.check(uInput);
  res.json({
    winner: resData[0],
    type: resData[1],
  });
});

const port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, function () {
  console.log(`App listening on http://localhost:${port}/`);
});
