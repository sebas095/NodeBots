const svgImage = require('./svgImage');

var svg = svgImage.getPoints('./inputs/img/rect.svg');
var prev = svg.prev;
var points = svg.points;

console.log("Origen: ", prev);
console.log("Puntos: ", points);
