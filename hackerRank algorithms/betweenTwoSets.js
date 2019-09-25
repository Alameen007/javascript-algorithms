function getTotalX(a, b) {
  const newArr = a.concat(b);
  const firstElem = newArr[0];
  const lastElem = newArr[newArr.length - 1];
  let count = 0;

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
    for (let j = firstElem; j <= lastElem; j++) {
      if (newArr[i] % j === 0) {
        console.log(newArr[i] % j === 0);
        count++;
      }
    }
  }
  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
