const crypto = require('crypto');
function doHeavyStuff(item) {
  return crypto
    .createHmac('sha256', 'secret')
    .update(new Array(10000).fill(item).join('.'))
    .digest('hex');
}
console.time('doHeavyStuff');
const codes = [];
for (let i = 0; i < 5000; i++) {
  const val = doHeavyStuff(`doHeavy-${i + 1}`);
  codes.push(val);
}
console.log({
  codes: codes.length,
});
console.timeEnd('doHeavyStuff');