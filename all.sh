#!/bin/sh

for input in $(ls test-input)
do
  for scenario in $(ls benchmarks)
  do
    echo "node ./benchmarks/$scenario ./test-input/$input"
    node benchmarks/$scenario ./test-input/$input
    echo ""
  done
done
