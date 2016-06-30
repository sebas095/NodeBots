const svgImage = require('./svgImage');

var svg = svgImage.getPoints('./img/rect.svg')
var prev = svg.prev;
var points = svg.points;
var origin = prev;
var distx, disty;

// for (var i = 0; i < points.length; i++) {
//   distx = points[i].x - prev.x;
//   disty = points[i].y - prev.y;
//   prev = points[i];
//   console.log(distx, disty);
// }
//
// distx = origin.x - prev.x;
// disty = origin.y - prev.y;

console.log(distx, disty);
console.log("Origen: ", origin);
console.log("Puntos: ", points);
