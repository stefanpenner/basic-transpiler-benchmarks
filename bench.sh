#!/bin/sh

echo "node ./parse-print.js ./$1"
node ./parse-print.js ./$1
echo ""

echo "node ./parse.js ./$1"
node ./parse.js ./$1
echo ""

echo "node ./transpile.js ./$1"
node ./transpile.js ./$1
echo ""
