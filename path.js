const path = require('path');



const filePath = path.join('/public', 'dist', 'style', 'main.js');

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));