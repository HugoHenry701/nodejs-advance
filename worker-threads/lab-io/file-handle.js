const { Worker, isMainThread } = require('worker_threads');
const crypto = require('crypto');

const worker1 = new Worker('./worker1.js', {
  workerData: {
    num: 5,
  },
});
worker1.on('message', (result) => {
  console.log('worker1: ', result);
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
  console.log('worker2: ', result);
});
worker2.on('error', (msg) => {
  console.log(msg);
});

// Function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function calculateTotal(target, range) {
  // console.time('calculateTotal');
  let random = getRandomInt(target);
  let result = 0;
  for (let i = 0; i < range; i++) {
    result +=
      crypto
        .createHmac('sha256', 'secret')
        .update(new Array(range).fill(`doHeavy-${i + 1}`).join('.'))
        .digest('hex').length * random;
  }
  // console.timeEnd('calculateTotal');
  return result;
}

function main(index) {
  console.time(`file-handle-multi-thread-${index}`);

  let mainThreadResult = 0;

  if (isMainThread) {
    let requestTarget = 15;
    let requestRange = 1000;

    mainThreadResult = calculateTotal(requestTarget, requestRange);
  }
  worker1.postMessage(mainThreadResult);
  worker2.postMessage(mainThreadResult);

  console.timeEnd(`file-handle-multi-thread-${index}`);
}

console.time('Multi_Thread_Lab');
for (let x = 0; x < 100; x++) {
  main(x);
}
worker1.terminate();
worker2.terminate();
console.timeEnd('Multi_Thread_Lab');
