fs = require('fs');

var d;
fs.readFile('comida.txt', 'utf8', function (err,data) {
    console.log(data.split("\n").join(" me mola\n"));
});
