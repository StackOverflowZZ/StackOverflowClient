var port = 8081;

var express = require('express');
var app = express();

app.use(express.static("app"));

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(port, 'localhost');
console.log("Server launched at localhost:"+port);