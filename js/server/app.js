'use strict'

let express = require('express');
let app = express();

app.get('/', (req, res) => {
  console.log(req);
})

app.listen(5555, () => {
  console.log('listening...');
})
