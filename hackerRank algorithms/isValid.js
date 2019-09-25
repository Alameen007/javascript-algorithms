function isValid(s) {
  const stringArr = s.split("");
  const hashTable = {};
  let count = 0;

  stringArr.forEach(string => {
    if (!hashTable[string]) hashTable[string] = 0;
    hashTable[string]++;
  });

  const numberArr = Object.values(hashTable);

  const maxNum = Math.max(...numberArr);
  const minNum = Math.min(...numberArr);

  numberArr.forEach(element => {
    if (maxNum === element) {
      count++;
    }
  });

  console.log(count);
  console.log(minNum);
  console.log(maxNum);
  console.log(numberArr);

  if (count > 1 || maxNum - 1 !== minNum) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(isValid("aabbc"));
