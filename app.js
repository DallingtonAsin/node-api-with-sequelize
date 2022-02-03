var express = require('express');
const db = require('./DbConnect');
var app = express();
const port = 3005;
console.log("Connection with node app established successfully");

db.connectDB();

app.listen(port, () => {
  console.log("App is listening on "+port);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });
