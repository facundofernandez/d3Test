var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'test')));


app.get('/', function (req, res) {
    res.send("index.html");
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'test', 'login.html'));
});

app.get('/portal', function (req, res) {
    console.log("redirect");
});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});