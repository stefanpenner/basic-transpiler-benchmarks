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

require('./bench')([
  { name: 'recast parse', fn: function() {
    return recast.parse(input);
  }},

  { name: 'acorn parse', fn: function() {
    return acorn.parse(input, {
      ecmaVersion: 6                  
    });
  }},

  { name: 'esprima parse', fn: function() {
    return esprima.parse(input);
  }}
]);
