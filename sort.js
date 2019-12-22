let arr = [5, 2, 1, -10, 8];
arr = arr.sort((a, b) => {
  return b - a;
});

console.log(arr);