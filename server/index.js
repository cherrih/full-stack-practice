var express = require('express');
var app = express();
var port = 3001;

app.use(express.static('client/dist'));

app.post('/poke', function (req, res) {
  // TODO - your code here!
  // This route should take the searched pokemon
  // and get the info from the pokemon api, 
  // then save the pokemon info in the db 
});

app.get('/poke', function (req, res) {
  // TODO - your code here!
  // This route should send back pokemon from your db
});

app.listen(port, () => console.log('listening on: ', port));
