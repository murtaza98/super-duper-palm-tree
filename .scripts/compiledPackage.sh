#!/bin/bash
rm -rf dist/
rc-apps package
mkdir -p finalPackageForRelease/
fileOrigName=$(ls dist/ | head -1)
fileNewName=${fileOrigName%.*}_compiled.zip
mv dist/$fileOrigName finalPackageForRelease/$fileNewName