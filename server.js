const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

var server = app.listen(4001, function () {
    var host = server.address().address;
    var port = server.address().port;
  
    console.log('App listening at http://%s:%s', host, port);
  });