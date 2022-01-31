#!/bin/bash
rm -rf dist/
rc-apps package --no-compile
mkdir -p finalPackageForRelease/
fileOrigName=$(ls dist/ | head -1)
fileNewName=${fileOrigName%.*}_non_compiled.zip
mv dist/$fileOrigName finalPackageForRelease/$fileNewName
