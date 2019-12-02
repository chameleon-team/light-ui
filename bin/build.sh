#!/bin/bash
echo $1
rm -rf ./package/components
rm -rf ./package/assets
cp -R ./src/components/ ./package/components
cp -R  ./src/assets/ ./package/assets
#如果是发布dnpm 内网源，那么将 import cml from 'chameleon-api' 替换为 import cml from '@didi/chameleon-api'
if [ $1 -eq 'dnpm' ];then
sed -i '' 's/chameleon-api/@didi\/chameleon-api./g'  ./package/**/**/*.js
sed -i '' 's/chameleon-api/@didi\/chameleon-api./g'  ./package/**/**/*.cml
