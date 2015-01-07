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
var esperanto = require('esperanto');

// console.log(to5.transform(input,   { modules: "common" }).code);
// console.log(to5.transform(input,   { modules: "amd" }).code);
// console.log(esperanto.toAmd(input, {}).code);
// console.log(esperanto.toCjs(input, {}).code);

require('../bench')([
  { name: 'traceur',          fn: function() { return traceur.compile(input, { }); } },
  { name: '6to5 (AMD)',       fn: function() { return to5.transform(input,   { whitelist: [ 'modules' ], modules: 'common' }).code; } },
  { name: '6to5 (CJS)',       fn: function() { return to5.transform(input,   { whitelist: [ 'modules' ], modules: 'amd'    }).code; } },
  { name: 'esperanto (AMD)',  fn: function() { return esperanto.toAmd(input, {}).code; } },
  { name: 'esperanto (CJS) ', fn: function() { return esperanto.toCjs(input, {}).code; } },
]);
