const fs = require('fs')
console.time('event-loop')
setTimeout(() => {
  console.log('hello');
}, 0);
fs.readFile('./read.txt', () => {
  console.log('world');
});
setImmediate(() => {
  console.log('immediate');
});

for (let index = 0; index > 2000000000; index++) {}

console.timeEnd('event-loop')