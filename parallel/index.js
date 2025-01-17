async function parallel(arr, fn, threads = 2) {
  console.time("my-parallel-test");
  const result = [];
  while (arr.length) {
    const res = await Promise.all(arr.splice(0, threads).map((x) => fn(x)));
    console.log("-----------------------");
    result.push(res);
  }
  return result.flat();
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const apiLikeFunction = (v) =>
  new Promise((resolve, rej) =>
    setTimeout(() => {
      console.log('executing : ', v);
      resolve(v * v);
    }, 3000)
  );

const main = async () => {
  const threads = 5;
  const res = await parallel(arr, apiLikeFunction, threads);

  console.log({
    result: res,
  });
  console.timeEnd("my-parallel-test");
};

main();