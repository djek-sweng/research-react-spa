#!/bin/sh

find . \
  -iname "node_modules" \
  -o -iname "dist" | xargs rm -rf
