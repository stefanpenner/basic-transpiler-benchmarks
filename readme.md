
# MISC transpiler related benchmarks

exploration of various es6 -> es5(3) transpilation options. Currently just very
basic benchmark information.


### usage

```
bench.sh samples/controller.js
bench.sh samples/simple-export-default-class.js
```

```
node benchmarks/esnext-transform es6-arrow-function test-input/*
node benchmarks/esnext-transform <name-of-transform> <...inputs files>
```

#### testing transpile.js

```
- esnext
- traceur
- 6to5
- jst
esnext x 25.83 ops/sec ±4.98% (47 runs sampled)  # needs module step still
traceur x 581 ops/sec ±16.91% (64 runs sampled)
6to5 x 88.34 ops/sec ±3.56% (66 runs sampled)
jst x 3,443 ops/sec ±4.31% (75 runs sampled)  # needs module step still
```

#### testing parse.js

```
testing
- recast parse
- acorn parse
- esprima parse
recast parse x 3,145 ops/sec ±3.22% (80 runs sampled)
acorn parse x 60,765 ops/sec ±3.27% (79 runs sampled)
esprima parse x 59,166 ops/sec ±6.67% (76 runs sampled)
```

#### testing parse-print.js

```
- recast parse+print
- esprima parse + escodegen generate
- acorn parse + esotope generate
- acorn parse + escodegen generate
recast parse+print x 933 ops/sec ±2.44% (83 runs sampled)
esprima parse + escodegen generate x 26,780 ops/sec ±2.95% (76 runs sampled)
acorn parse + esotope generate x 40,681 ops/sec ±2.86% (81 runs sampled)
acorn parse + escodegen generate x 27,511 ops/sec ±2.44% (83 runs sampled)
```
