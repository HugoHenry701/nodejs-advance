const fs = require('fs');
const { parentPort } = require('node:worker_threads');

const fileName = './media/file2.txt';

function handleFile2(newData) {
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
        console.error('Error writing to the file2:', err);
        return;
      }

      // console.log('File2 updated successfully!');
    });
  });
}
function readFile2() {
  return fs.readFileSync(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  }).length;
}
function main() {
  parentPort.on('message', (message) => {
    // console.log(`Worker2 receive: ${message}`);
    handleFile2(message);
  });
  parentPort.postMessage('Hello from worker2 - ' + readFile2());
}

main();
