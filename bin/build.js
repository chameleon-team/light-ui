const fs = require('fs');
const path = require('path');
let jsonPath = path.resolve(__dirname,'../package/package.json');
let result = JSON.parse(fs.readFileSync(jsonPath, {encoding:'utf8'}));
const argv = require('minimist')(process.argv);
console.log('argv',argv)
if(argv.npm){ //发布npm源的包，修改包名
  result.name = "light-cml-ui"
}else{
  result.name = "@didi/light-cml-ui"
}
console.log(process.argv)
fs.writeFileSync(jsonPath, JSON.stringify(result,null,2),{encoding:'utf8'})