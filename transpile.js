var fs = require('fs');
var file = process.argv[2];
var input = fs.readFileSync(file).toString();
var esnext = require('esnext').compile;
var traceur = require('traceur');
var to5 = require('6to5');
var recast = require('recast');
var es6ClassVisitors = require('jstransform/visitors/es6-class-visitors').visitorList;
var fs = require('fs');
var jst = require('jstransform');
var esnextee = require('esnext-ee').compile;

// console.log(esnext(input));
// console.log(esnextee(input));
// console.log(traceur.compile(input, { }));
// console.log(to5.transform(input, { }).code);
// console.log(recast.print(recast.parse(input)));
// console.log(escodegen.generate(esprima.parse(input)));
// console.log(escodegen.generate(acorn.parse(input, { ecmaVersion: 6 })));
// console.log(esotope.generate(acorn.parse(input, { ecmaVersion: 6 })));
// console.log(jst.transform(es6ClassVisitors, input).code);

require('./bench')([
  { name: 'esnext',  fn: function() { return esnext(input).code; } }, // needs a module step still
  { name: 'esnext-ee',  fn: function() { return esnextee(input); } }, // needs a module step still
  { name: 'traceur',    fn: function() { return traceur.compile(input, { }); } },
  { name: '6to5',       fn: function() { return to5.transform(input, { }).code; } },
  { name: 'jst',        fn: function() { return jst.transform(es6ClassVisitors, input).code; } }, // needs a module step still
]);
