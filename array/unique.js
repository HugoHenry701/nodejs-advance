const arrUnique = [
  {
    userName: 'hieunq',
    point: [1, 2, 3, 4],
  },
  {
    userName: 'thaind',
    point: [2, 3],
  },
  {
    userName: 'conghv',
    point: [1, 4],
  },
];
console.log({
  result: [...new Map(arrUnique.map((e) => e.point)).values()],
});
