const arrFlat = [
  {
    userName: 'hieunq',
    point: [1, 2, 3, 4],
  },
  {
    userName: 'thaind',
    point: [2, 3, 4],
  },
  {
    userName: 'conghv',
    point: [1, 4],
  },
];
console.log({
  result: arrFlat.map((e) => e.point).flat(),
});
