var recast = require('recast');
var fs = require('fs');
var transformName = process.argv[2];
var transform = require(transformName).transform;

var files = process.argv.slice(3, process.argv.length);

var benchmarks = files.map(function(path) {
  var ast = recast.parse(fs.readFileSync(path).toString());
  return {
    name: path,
    fn: function() { return transform(ast); }
  };
});

require('../bench')(benchmarks);
