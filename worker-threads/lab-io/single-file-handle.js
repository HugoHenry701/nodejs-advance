const crypto = require('crypto');
const fs = require('fs');
function handleFile(newData, index) {
  const fileName = `./media/file${index}.txt`;

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let crrLength = data.length;
    let crrDate = Date.now();

    let updatedData = '';
    if (newData) {
      updatedData = data + `\n${crrDate}: ${newData} [OUT-${index}]`;
    } else {
      updatedData = data + `\n${crrDate}: ${crrLength} [IN-${index}]`;
    }
    fs.writeFile(fileName, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file1:', err);
        return;
      }

      // console.log('File1 updated successfully!');
    });
  });
}

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
  console.time(`file-handle-single-thread-${index}`);

  let mainThreadResult = 0;

  let requestTarget = 15;
  let requestRange = 1000;

  mainThreadResult = calculateTotal(requestTarget, requestRange);
  handleFile(mainThreadResult, 1);
  handleFile(mainThreadResult, 2);
  console.timeEnd(`file-handle-single-thread-${index}`);
}

console.time('Single_Thread_Lab');
for (let x = 0; x < 100; x++) {
  main(x);
}
console.timeEnd('Single_Thread_Lab');
