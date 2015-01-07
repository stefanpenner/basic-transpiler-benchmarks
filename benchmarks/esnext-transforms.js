var es6ArrowFunction = require('es6-arrow-function').transform;
var es6Class = require('es6-class').transform;
var es6ComputedProperties = require('es6-computed-properties').transform;
var es6DefaultParams = require('es6-default-params').transform;
var es6Destructuring = require('es6-destructuring').transform;
var regenerator = require('regenerator').transform;
var es6ObjectConcise = require('es6-object-concise').transform;
var es6ObjectShort = require('es6-object-short').transform;
var es6RestParams = require('es6-rest-params').transform;
var es6Spread = require('es6-spread').transform;
var es6Templates = require('es6-templates').transform;
var regexpu = require('regexpu').transform;
var recast = require('recast');
var fs = require('fs');
var file = process.argv[2];
var input = fs.readFileSync(file).toString();
var ast = recast.parse(input);

// console.log(es6ArrowFunction(ast));
// console.log(es6Class(ast));
// console.log(es6ComputedProperties(ast));
// console.log(es6DefaultParams(ast));
// console.log(es6Destructuring(ast));
// console.log(regenerator(ast));
// console.log(es6ObjectConcise(ast));
// console.log(es6ObjectShort(ast));
// console.log(es6RestParams(ast));
// console.log(es6Spread(ast));
// console.log(es6Spread(ast));
// console.log(regexpu(ast));

require('../bench')([
  { name: 'es6-arrow-function',      fn: function() { return es6ArrowFunction(ast);      }}, 
  { name: 'es6-class',               fn: function() { return es6Class(ast);              }}, 
  { name: 'es6-computed-properties', fn: function() { return es6ComputedProperties(ast); }}, 
  { name: 'es6-default-params',      fn: function() { return es6DefaultParams(ast);      }}, 
  { name: 'es6-destructuring',       fn: function() { return es6Destructuring(ast);      }}, 
  { name: 'regenerator',             fn: function() { return regenerator(ast);           }}, 
  { name: 'es6-object-concise',      fn: function() { return es6ObjectConcise(ast);      }},
  { name: 'es6-object-short',        fn: function() { return es6ObjectShort(ast);        }},
  { name: 'es6-rest-params',         fn: function() { return es6RestParams(ast);         }},
  { name: 'es6-spread',              fn: function() { return es6Spread(ast);             }},
  { name: 'es6-templates',           fn: function() { return es6Templates(ast);          }},
  { name: 'regexpu',                 fn: function() { return regexpu(ast);               }},
]);
