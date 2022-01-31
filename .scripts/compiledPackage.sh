#!/bin/bash
pwd
ls dist/
mkdir -p finalPackageForRelease/
tmp1=$(ls dist/ | head -1)
echo "tmp1", $tmp1
tmp2=${tmp1%.*}_compiled.zip
echo "tmp2", $tmp2
mv dist/$tmp1 finalPackageForRelease/$tmp2
# rm -rf dist/
ls finalPackageForRelease/