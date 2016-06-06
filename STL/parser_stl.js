const parseStl = require('parse-stl');
const stl = require('stl');
const fs = require('fs');

// Forma 1
var buffer = fs.readFileSync('inputs/triangle.stl');
var mesh = parseStl(buffer);
fs.writeFileSync('outputs/triangle.json', JSON.stringify(mesh, null, 1));

// Forma 2
var facets = stl.toObject(fs.readFileSync('inputs/triangle.stl').toString());
fs.writeFileSync('outputs/triangle.stl', stl.fromObject(facets));
