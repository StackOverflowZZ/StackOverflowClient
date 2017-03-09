var express = require('express');
var app = express();

app.use(express.static("app"));

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(8081, 'localhost');
console.log("Server launched");