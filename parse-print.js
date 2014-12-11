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
  { name: 'recast parse+print', fn: function() {
    return recast.print(recast.parse(input));
  }},

  { name: 'esprima parse + escodegen generate', fn: function() {
    return escodegen.generate(esprima.parse(input));
  }},

  { name: 'acorn parse + esotope generate', fn: function() {
    return esotope.generate(acorn.parse(input, {
      ecmaVersion: 6
    }));
  }},

  { name: 'acorn parse + escodegen generate', fn: function() {
    return escodegen.generate(acorn.parse(input, {
      ecmaVersion: 6
    }));
  }}
]);
