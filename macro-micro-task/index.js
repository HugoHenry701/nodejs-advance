console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
new Promise((resolve, reject) => {
  console.log(3);
  resolve();
}).then(() => {
  console.log(4);
});
console.log(5);
