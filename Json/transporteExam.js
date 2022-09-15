const fs = require('fs');

var data = fs.readFileSync('./Json/example.json')
console.log(data);

var pasteles = JSON.parse(data);
console.log(pasteles);
console.log(typeof(pasteles));

//---------------------------------------------------------------------------------------
// let jsonData = require('./Json/example.json');
// console.log(jsonData);
// console.log(typeof(jsonData));