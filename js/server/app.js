'use strict'
let express = require('express');
let app = express();
let request = require('request');
let config  = require('../config.js');

app.get('/rates', (req, res) => {
  // Promise
  request({method: 'GET', uri: config.get('baseUrl')}, (error, response, body) => {
    if(response.statusCode == '200'){
      res.send(body);
    } else {
      res.send(config.get('baseUrlError'))
    }
  });
});

let getCurrencyRates = () => {
  let responseBody = request({method: 'GET', uri: config.get('baseUrl')}, (error, response, body) => {
    return body;
  });

  return responseBody;
}

app.listen(5555, () => {
  console.log('listening...');
})
