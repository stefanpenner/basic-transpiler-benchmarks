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

// console.log(traceur.compile(input, { sourceMap: true, sourceMapSource: 'input.js', sourceMapFile: 'controller.js'}));
// console.log(to5.transform(input,   { whiteslist: ['modules'], modules: 'common', sourceMap: true, sourceMapFile: 'controller.js', sourceMapSource: 'controller.js' }));
// console.log(to5.transform(input,   { whiteslist: ['modules'], modules: 'amd', sourceMap: true, sourceMapFile: 'controller.js', sourceMapSource: 'controller.js' }));
// console.log(esperanto.toAmd(input, { sourceMap: true, sourceMapFile: 'controller.js', sourceMapSource: 'input.js'}));
// console.log(esperanto.toCjs(input, { sourceMap: true, sourceMapFile: 'controller.js', sourceMapSource: 'input.js'}));

require('../bench')([
  { name: 'traceur', fn: function() {
    var result = traceur.compile(input, {
       sourceMap: true,
       sourceMapFile: 'controller.js',
       sourceMapSource: 'input.js'
    });
    result.code;
    result.map;
    return result;
  } },
  { name: '6to5 (AMD)', fn: function() {
     var result = to5.transform(input,   {
       whitelist: ['modules'],
       modules: 'common',
       sourceMap: true,
       sourceMapFile: 'controller.js',
       sourceMapSource: 'input.js'
     });
     result.code;
     result.map;
     return resu;t;
  } },
  { name: '6to5 (CJS)', fn: function() {
    var result = to5.transform(input, {
      whitelist: ['modules'],
      modules: 'amd'
    });

    result.code;
    result.map;
    return result;
  } },
  { name: 'esperanto (AMD)', fn: function() {
    var result = esperanto.toAmd(input, {
      sourceMap: true,
      sourceMapFile: 'controller.js',
      sourceMapSource: 'controller.js'
    });

    result.code;
    result.map;
    return result;

  } },
  { name: 'esperanto (CJS) ', fn: function() {
    var result = esperanto.toCjs(input, {
      sourceMap: true,
      sourceMapFile: 'controller.js',
      sourceMapSource: 'input.js'
    });
    result.code;
    result.map;
    return result;
  } },
]);
