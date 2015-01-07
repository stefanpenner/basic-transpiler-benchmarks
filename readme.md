
# MISC transpiler related benchmarks

exploration of various es6 -> es5(3) transpilation options. Currently just very
basic benchmark information.


### usage

run all benchmarks on some file (not really useful)
```
bench.sh samples/controller.js
bench.sh samples/simple-export-default-class.js
```

run a specific esnext transform on one or more files (very useful)
```
node benchmarks/esnext-transform es6-arrow-function test-input/*
node benchmarks/esnext-transform <name-of-transform> <...inputs files>
```

run various transpile toolchains against variable input
```
node benchmarks/transpile.js  test-input/*
```

#### Example output

```
node ./benchmarks/esnext-transforms.js ./test-input/controller-es5.js
running...
  - es6-arrow-function x 419 ops/sec ±3.24% (78 runs sampled)
  - es6-class x 379 ops/sec ±2.90% (79 runs sampled)
  - es6-computed-properties x 356 ops/sec ±2.40% (80 runs sampled)
  - es6-default-params x 183 ops/sec ±8.90% (68 runs sampled)
  - es6-destructuring x 264 ops/sec ±11.22% (65 runs sampled)
  - regenerator x 435 ops/sec ±3.15% (82 runs sampled)
  - es6-object-concise x 284 ops/sec ±12.08% (64 runs sampled)
  - es6-object-short x 331 ops/sec ±7.57% (71 runs sampled)
  - es6-rest-params x 321 ops/sec ±7.73% (64 runs sampled)
  - es6-spread x 277 ops/sec ±11.77% (65 runs sampled)
  - es6-templates x 407 ops/sec ±5.73% (73 runs sampled)
  - regexpu x 481 ops/sec ±2.94% (82 runs sampled)

node ./benchmarks/modules-source-maps.js ./test-input/controller-es5.js
running...
  - traceur x 440 ops/sec ±6.31% (78 runs sampled)
  - 6to5 (AMD) x 69.10 ops/sec ±4.56% (60 runs sampled)
  - 6to5 (CJS) x 69.22 ops/sec ±6.24% (63 runs sampled)
  - esperanto (AMD) x 373 ops/sec ±3.93% (72 runs sampled)
  - esperanto (CJS)  x 334 ops/sec ±7.22% (70 runs sampled)

node ./benchmarks/modules.js ./test-input/controller-es5.js
running...
  - traceur x 449 ops/sec ±4.44% (75 runs sampled)
  - 6to5 (AMD) x 28.79 ops/sec ±3.41% (51 runs sampled)
  - 6to5 (CJS) x 26.60 ops/sec ±6.95% (48 runs sampled)
  - esperanto (AMD) x 2,309 ops/sec ±3.37% (79 runs sampled)
  - esperanto (CJS)  x 2,408 ops/sec ±3.30% (78 runs sampled)

node ./benchmarks/parse-print.js ./test-input/controller-es5.js
running...
  - recast parse+print x 95.90 ops/sec ±4.62% (67 runs sampled)
  - esprima parse + escodegen generate x 2,208 ops/sec ±5.51% (77 runs sampled)
  - acorn parse + esotope generate x 4,798 ops/sec ±4.22% (76 runs sampled)
  - acorn parse + escodegen generate x 2,959 ops/sec ±4.33% (77 runs sampled)

node ./benchmarks/parse.js ./test-input/controller-es5.js
running...
  - recast parse x 227 ops/sec ±14.35% (64 runs sampled)
  - acorn parse x 7,356 ops/sec ±5.84% (76 runs sampled)
  - esprima parse x 3,781 ops/sec ±5.08% (74 runs sampled)

node ./benchmarks/transpile.js ./test-input/controller-es5.js
running...
  - esnext x 12.42 ops/sec ±18.24% (29 runs sampled)
  - traceur x 423 ops/sec ±8.47% (75 runs sampled)
  - 6to5 x 26.16 ops/sec ±6.64% (48 runs sampled)
  - jst x 463 ops/sec ±3.92% (77 runs sampled)

node ./benchmarks/esnext-transforms.js ./test-input/controller.js
running...
  - es6-arrow-function x 447 ops/sec ±4.58% (75 runs sampled)
  - es6-class x 406 ops/sec ±4.11% (76 runs sampled)
  - es6-computed-properties x 410 ops/sec ±3.65% (79 runs sampled)
  - es6-default-params x 241 ops/sec ±3.49% (77 runs sampled)
  - es6-destructuring x 369 ops/sec ±3.90% (78 runs sampled)
  - regenerator x 467 ops/sec ±3.94% (79 runs sampled)
  - es6-object-concise x 403 ops/sec ±4.09% (78 runs sampled)
  - es6-object-short x 397 ops/sec ±3.28% (82 runs sampled)
  - es6-rest-params x 424 ops/sec ±3.37% (79 runs sampled)
  - es6-spread x 391 ops/sec ±3.63% (79 runs sampled)
  - es6-templates x 442 ops/sec ±2.62% (80 runs sampled)
  - regexpu x 492 ops/sec ±3.22% (80 runs sampled)

node ./benchmarks/modules-source-maps.js ./test-input/controller.js
running...
  - traceur x 360 ops/sec ±5.57% (74 runs sampled)
  - 6to5 (AMD) x 63.98 ops/sec ±5.54% (59 runs sampled)
  - 6to5 (CJS) x 61.93 ops/sec ±7.14% (54 runs sampled)
  - esperanto (AMD) x 197 ops/sec ±11.29% (66 runs sampled)
  - esperanto (CJS)  x 349 ops/sec ±5.76% (73 runs sampled)

node ./benchmarks/modules.js ./test-input/controller.js
running...
  - traceur x 297 ops/sec ±6.98% (71 runs sampled)
  - 6to5 (AMD) x 20.99 ops/sec ±6.84% (40 runs sampled)
  - 6to5 (CJS) x 19.26 ops/sec ±12.74% (37 runs sampled)
  - esperanto (AMD) x 191 ops/sec ±20.73% (51 runs sampled)
  - esperanto (CJS)  x 898 ops/sec ±19.33% (51 runs sampled)

node ./benchmarks/parse-print.js ./test-input/controller.js
running...
  - recast parse+print x 81.63 ops/sec ±6.06% (62 runs sampled)
  - esprima parse + escodegen generate x 1,850 ops/sec ±3.29% (76 runs sampled)
  - acorn parse + esotope generate x 3,157 ops/sec ±14.66% (62 runs sampled)
  - acorn parse + escodegen generate x 1,609 ops/sec ±15.42% (65 runs sampled)

node ./benchmarks/parse.js ./test-input/controller.js
running...
  - recast parse x 174 ops/sec ±12.76% (68 runs sampled)
  - acorn parse x 4,863 ops/sec ±26.05% (68 runs sampled)
  - esprima parse x 2,944 ops/sec ±8.84% (70 runs sampled)

node ./benchmarks/transpile.js ./test-input/controller.js
running...
  - esnext x 9.04 ops/sec ±23.84% (31 runs sampled)
  - traceur x 162 ops/sec ±13.13% (58 runs sampled)
  - 6to5 x 13.06 ops/sec ±17.58% (32 runs sampled)
  - jst x 231 ops/sec ±12.75% (49 runs sampled)

node ./benchmarks/esnext-transforms.js ./test-input/empty.js
running...
  - es6-arrow-function x 37,195 ops/sec ±13.03% (61 runs sampled)
  - es6-class x 23,589 ops/sec ±26.25% (43 runs sampled)
  - es6-computed-properties x 26,107 ops/sec ±26.82% (61 runs sampled)
  - es6-default-params x 21,911 ops/sec ±12.09% (73 runs sampled)
  - es6-destructuring x 3,735 ops/sec ±11.23% (67 runs sampled)
  - regenerator x 37,687 ops/sec ±12.86% (63 runs sampled)
  - es6-object-concise x 3,691 ops/sec ±27.48% (52 runs sampled)
  - es6-object-short x 6,493 ops/sec ±6.38% (74 runs sampled)
  - es6-rest-params x 52,778 ops/sec ±2.31% (79 runs sampled)
  - es6-spread x 59,585 ops/sec ±2.59% (78 runs sampled)
  - es6-templates x 59,640 ops/sec ±2.75% (75 runs sampled)
  - regexpu x 58,579 ops/sec ±2.37% (75 runs sampled)

node ./benchmarks/modules-source-maps.js ./test-input/empty.js
running...
  - traceur x 1,410 ops/sec ±21.60% (49 runs sampled)
  - 6to5 (AMD) x 2,313 ops/sec ±12.27% (54 runs sampled)
  - 6to5 (CJS) x 1,177 ops/sec ±14.79% (54 runs sampled)
  - esperanto (AMD) x 8,192 ops/sec ±10.57% (59 runs sampled)
  - esperanto (CJS)  x 10,387 ops/sec ±8.75% (63 runs sampled)

node ./benchmarks/modules.js ./test-input/empty.js
running...
  - traceur x 2,029 ops/sec ±16.01% (69 runs sampled)
  - 6to5 (AMD) x 740 ops/sec ±13.56% (61 runs sampled)
  - 6to5 (CJS) x 529 ops/sec ±16.09% (60 runs sampled)
  - esperanto (AMD) x 11,860 ops/sec ±22.67% (55 runs sampled)
  - esperanto (CJS)  x 23,545 ops/sec ±12.26% (64 runs sampled)

node ./benchmarks/parse-print.js ./test-input/empty.js
running...
  - recast parse+print x 3,751 ops/sec ±13.71% (64 runs sampled)
  - esprima parse + escodegen generate x 236,174 ops/sec ±15.35% (59 runs sampled)
  - acorn parse + esotope generate x 60,261 ops/sec ±13.30% (73 runs sampled)
  - acorn parse + escodegen generate x 65,865 ops/sec ±7.75% (73 runs sampled)

node ./benchmarks/parse.js ./test-input/empty.js
running...
  - recast parse x 10,503 ops/sec ±19.60% (72 runs sampled)
  - acorn parse x 66,424 ops/sec ±11.76% (71 runs sampled)
  - esprima parse x 626,098 ops/sec ±16.17% (67 runs sampled)

node ./benchmarks/transpile.js ./test-input/empty.js
running...
  - esnext x 682 ops/sec ±10.06% (70 runs sampled)
  - traceur x 1,640 ops/sec ±9.29% (67 runs sampled)
  - 6to5 x 732 ops/sec ±11.86% (58 runs sampled)
  - jst x 29,816 ops/sec ±17.63% (54 runs sampled)

node ./benchmarks/esnext-transforms.js ./test-input/simple-export-default-class.js
running...
  - es6-arrow-function x 2,990 ops/sec ±27.55% (67 runs sampled)
  - es6-class x 486 ops/sec ±12.71% (68 runs sampled)
  - es6-computed-properties x 471 ops/sec ±10.63% (64 runs sampled)
  - es6-default-params x 276 ops/sec ±9.47% (66 runs sampled)
  - es6-destructuring x 355 ops/sec ±11.55% (62 runs sampled)
  - regenerator x 526 ops/sec ±10.25% (73 runs sampled)
  - es6-object-concise x 414 ops/sec ±7.98% (65 runs sampled)
  - es6-object-short x 409 ops/sec ±10.96% (64 runs sampled)
  - es6-rest-params x 456 ops/sec ±10.14% (67 runs sampled)
  - es6-spread x 460 ops/sec ±14.29% (68 runs sampled)
  - es6-templates x 320 ops/sec ±25.29% (44 runs sampled)
  - regexpu x 433 ops/sec ±17.16% (56 runs sampled)

node ./benchmarks/modules-source-maps.js ./test-input/simple-export-default-class.js
running...
  - traceur x 288 ops/sec ±26.53% (63 runs sampled)
  - 6to5 (AMD) x 206 ops/sec ±14.91% (57 runs sampled)
  - 6to5 (CJS) x 200 ops/sec ±19.51% (48 runs sampled)
  - esperanto (AMD) x 1,652 ops/sec ±24.67% (50 runs sampled)
  - esperanto (CJS)  x 1,820 ops/sec ±21.72% (55 runs sampled)

node ./benchmarks/modules.js ./test-input/simple-export-default-class.js
running...
  - traceur x 261 ops/sec ±25.87% (57 runs sampled)
  - 6to5 (AMD) x 43.21 ops/sec ±13.56% (47 runs sampled)
  - 6to5 (CJS) x 47.64 ops/sec ±11.77% (51 runs sampled)
  - esperanto (AMD) x 5,609 ops/sec ±12.71% (67 runs sampled)
  - esperanto (CJS)  x 5,878 ops/sec ±14.65% (70 runs sampled)

node ./benchmarks/parse-print.js ./test-input/simple-export-default-class.js
running...
  - recast parse+print x 467 ops/sec ±14.54% (62 runs sampled)
  - esprima parse + escodegen generate x 15,709 ops/sec ±16.88% (69 runs sampled)
  - acorn parse + esotope generate x 22,541 ops/sec ±13.34% (72 runs sampled)
  - acorn parse + escodegen generate x 15,536 ops/sec ±10.56% (67 runs sampled)

node ./benchmarks/parse.js ./test-input/simple-export-default-class.js
running...
  - recast parse x 1,719 ops/sec ±12.94% (64 runs sampled)
  - acorn parse x 35,220 ops/sec ±13.83% (67 runs sampled)
  - esprima parse x 48,185 ops/sec ±2.98% (77 runs sampled)

node ./benchmarks/transpile.js ./test-input/simple-export-default-class.js
running...
  - esnext x 39.37 ops/sec ±3.48% (53 runs sampled)
  - traceur x 681 ops/sec ±5.70% (69 runs sampled)
  - 6to5 x 73.88 ops/sec ±4.92% (58 runs sampled)
  - jst x 2,762 ops/sec ±4.44% (71 runs sampled)
```
