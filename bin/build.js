const fs = require('fs');
const path = require('path');
let jsonPath = path.resolve(__dirname,'../package/package.json');
let result = JSON.parse(fs.readFileSync(jsonPath, {encoding:'utf8'}));
let npmType = process.argv[2];

if(npmType === 'npm'){
  result.name = "light-cml-ui"
}else{
  result.name = "@didi/light-cml-ui"
}
console.log(process.argv)
fs.writeFileSync(jsonPath, JSON.stringify(result,null,2),{encoding:'utf8'})