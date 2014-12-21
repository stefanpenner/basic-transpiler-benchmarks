var fs = require('fs');
var file = process.argv[2];
var input = fs.readFileSync(file).toString();
var traceur = require('traceur');
var to5 = require('6to5');
var recast = require('recast');
var esprima = require('esprima-fb');
var acorn = require('acorn');

require('../bench')([
  { name: 'recast parse', fn: function() {
    return recast.parse(input);
  }},

  { name: 'acorn parse', fn: function() {
    return acorn.parse(input, {
      ecmaVersion: 6                  
    });
  }},

  { name: 'esprima parse', fn: function() {
    return esprima.parse(input,{
      sourceType: 'module'
    });
  }}
]);
