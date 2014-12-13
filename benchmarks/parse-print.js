var fs = require('fs');
var file = process.argv[2];
var input = fs.readFileSync(file).toString();
var esnext = require('esnext-esotope-esprima').compile;
var traceur = require('traceur');
var to5 = require('6to5');
var recast = require('recast');
var esprima = require('esprima-fb');
var esotope = require('esotope');
var escodegen = require('escodegen');
var acorn = require('acorn');

// console.log(recast.print(recast.parse(input)));
// console.log(escodegen.generate(esprima.parse(input)));
// console.log(esotope.generate(acorn.parse(input, { ecmaVersion: 6 })));
// console.log(escodegen.generate(acorn.parse(input, { ecmaVersion: 6 })));

require('../bench')([
  { name: 'recast parse+print', fn: function() {
    return recast.print(recast.parse(input));
  }},

  { name: 'esprima parse + escodegen generate', fn: function() {
    return escodegen.generate(esprima.parse(input));
  }},

  { name: 'acorn parse + esotope generate', fn: function() {
    return esotope.generate(acorn.parse(input, { ecmaVersion: 6 }));
  }},

  { name: 'acorn parse + escodegen generate', fn: function() {
    return escodegen.generate(acorn.parse(input, { ecmaVersion: 6 }));
  }}
]);
