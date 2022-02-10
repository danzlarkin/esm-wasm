#!/bin/bash

# Log out a start message
echo -e "\n\e[1;30m[build-js]\e[0m: started\n"

# Define the output directory
OUT="./dist/"

# Build the source with esbuild
npx esbuild --minify --outdir=$OUT src/*.js

# Log a message
echo -e "\n\e[1;30m[build-js]\e[0m: finished\n"