/*const parseStl = require('parse-stl');
const stl = require('stl');
const fs = require('fs');

// Forma 1
var buffer = fs.readFileSync('inputs/triangle.stl');
var mesh = parseStl(buffer);
fs.writeFileSync('outputs/triangle.json', JSON.stringify(mesh, null, 1));

// Forma 2
var facets = stl.toObject(fs.readFileSync('inputs/triangle.stl').toString());
fs.writeFileSync('outputs/triangle.stl', stl.fromObject(facets));*/

// https://www.npmjs.com/package/svg-path-parser

var parse = require('parse-svg-path')
var extract = require('extract-svg-path')

var path = extract(__dirname + '/inputs/img/rect.svg');
var svg = parse(path)

var points = [];
var prev = {};

for (var i in svg) {
  if (svg[i][0] == 'z') continue;
  var point = {
    x: svg[i][1],
    y: svg[i][2]
  };

  if (i == 0) {
    prev = point;
    continue;
  }
  points.push(point);
}

console.log(prev);
console.log(points);

// https://www.sumopaint.com/home/#app
// http://imagen.online-convert.com/es/convertir-a-svg
  // https://es.wikipedia.org/wiki/Scalable_Vector_Graphics
