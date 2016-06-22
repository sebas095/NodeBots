const parse = require('parse-svg-path')
const extract = require('extract-svg-path')

module.exports = {
  getPoints: function(url) {
    var path = extract(url);
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

    return {
      prev: prev,
      points: points
    }
  }
};
