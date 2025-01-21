const fs = require('fs');
const { parentPort } = require('node:worker_threads');
const fileName = './media/file1.txt';

function handleFile1(newData) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let crrLength = data.length;
    let crrDate = Date.now();

    let updatedData = '';
    updatedData =
      data +
      `\n${crrDate}: ${crrLength} [IN-1]` +
      `\n${crrDate}: ${newData} [OUT-1]`;

    fs.writeFile(fileName, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file1:', err);
        return;
      }

      // console.log('File1 updated successfully!');
    });
  });
}
function readFile1() {
  return fs.readFileSync(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return 0;
    }
  }).length;
}
function main() {
  parentPort.on('message', (message) => {
    // console.log(`Worker1 receive: ${message}`);
    handleFile1(message);
  });
  parentPort.postMessage('Hello from worker1 - ' + readFile1());
}

main();
