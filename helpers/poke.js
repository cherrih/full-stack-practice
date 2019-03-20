const request = require('request');
const config = require('../config.js');

let getReposByUsername = (searchTerm) => {
  // TODO - Use the request module to request info about pokemon
  // from the pokemon api
  // https://pokeapi.co/docs/v2.html#pokemon

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://pokeapi.co/api/v2/${searchTerm}`
  };

  request(options, (err, res, body) => {
    if (err) {
      callback(err);
    } else {
      var info = JSON.parse(body);
      callback(null, info);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;