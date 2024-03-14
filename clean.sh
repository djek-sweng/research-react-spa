#!/bin/sh

find . \
  -iname "node_modules" \
  -o -iname "dist" \
  -o -iname "coverage" | xargs rm -rf
