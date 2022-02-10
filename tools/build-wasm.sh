#!/bin/bash

# Log out a start message
echo -e "\n\e[1;30m[build-wasm]\e[0m: started\n"

# Define the directory
OUT="./dist/wasm"

# Build now with wasm-pack
wasm-pack build --target=web --out-dir=$OUT

# Find the package name
PACKAGE=$(find $OUT -name "*.js" | sed 's/\.\/dist\/wasm\///' | sed 's/\.js//')

# Remove the un-needed files from the output
rm $OUT/.gitignore $OUT/package.json $OUT/*.ts -rf 

# Rename the wasm file
mv $OUT/$PACKAGE*.wasm $OUT/module.wasm

# Append the new line to the begining of the script (new file)
echo -e "import module from './module.wasm';\n" >> $OUT/source.js

# Append the wasm binding to the end of the script
echo -e "\n((async() => await init(module))());" >> $OUT/$PACKAGE.js

# Append the new line to the begining of the script
cat $OUT/$PACKAGE.js >> $OUT/source.js

# Build the source with esbuild
npx esbuild --minify --outfile=$OUT/index.js $OUT/source.js

# Remove the other scripts
rm $OUT/$PACKAGE.js $OUT/source.js

# Log a message
echo -e "\n\e[1;30m[build-wasm]\e[0m: finished\n"