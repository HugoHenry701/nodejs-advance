function runWorker2(){
  console.time('runWorker2')
  console.log("I should run on worker2");
  let count = 0;
  for (let i = 0; i < 15000; i++) {
    count++;
  }
  console.log(`Finish job2 with result: ${count}`);
  console.timeEnd('runWorker2')
}
runWorker2();