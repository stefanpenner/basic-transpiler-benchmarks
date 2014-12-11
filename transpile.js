var fs = require('fs');
var file = process.argv[1];
var input = fs.readFileSync(file).toString();
var esnext = require('esnext').compile;
var traceur = require('traceur');
var to5 = require('6to5');
var recast = require('recast');
var esprima = require('esprima-fb');
var escodegen = require('escodegen');
var esotope = require('esotope');
var acorn = require('acorn');

// console.log(esnext(input).code);
// console.log(traceur.compile(input, { }));
// console.log(to5.transform(input, { }).code);
// console.log(recast.print(recast.parse(input)));
// console.log(escodegen.generate(esprima.parse(input)));
// console.log(escodegen.generate(acorn.parse(input, { ecmaVersion: 6 })));
// console.log(esotope.generate(acorn.parse(input, { ecmaVersion: 6 })));

require('./bench')([
  { name: 'esnext',  fn: function() { return esnext(input).code; } }, // this is still without modules, that is another transpile step to add to the mix
  { name: 'traceur', fn: function() { return traceur.compile(input, { }); } },
  { name: '6to5',    fn: function() { return to5.transform(input, { }).code; } },
]);
