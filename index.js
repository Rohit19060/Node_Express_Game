// Imports
const express = require("express");
var bodyParser = require("body-parser");
const Game = require("./game");
const app = express();

app.use(express.static("www"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Post request handler and response as json
app.post("/element", function (req, res) {
  let uInput = req.body.type;
  let newObj = new Game();
  let resData = newObj.check(uInput);
  res.json({
    winner: resData[0],
    type: resData[1],
  });
});

var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}`)
);
