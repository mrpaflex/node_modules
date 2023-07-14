const pathway = require('path');

//console.log(pathway.sep);

const filepath = pathway.join('content', 'path.txt');

//console.log(filepath);

const base = pathway.basename(filepath);

//console.log(base);

const resolve = pathway.resolve('content', 'path.txt');

console.log(resolve);