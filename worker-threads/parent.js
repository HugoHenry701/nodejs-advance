console.time('mainProcess');
function runNow() {
  console.time('runNow');
  console.log('I should run immediately');
  console.log('Writing database....');
  console.timeEnd('runNow');
}
const { Worker, isMainThread } = require('worker_threads');
const worker1 = new Worker('./worker.js', {
  workerData: {
    num: 5,
  },
});
worker1.on('message', (result) => {
  console.log('square of 5 is: ', result);
});
worker1.on('error', (msg) => {
  console.log(msg);
});
const worker2 = new Worker('./worker2.js', {
  workerData: {
    num: 10,
  },
});
worker2.on('message', (result) => {
  console.log('square of 10 is: ', result);
});
worker2.on('error', (msg) => {
  console.log(msg);
});
if (isMainThread) {
  runNow();
}
console.timeEnd('mainProcess');
