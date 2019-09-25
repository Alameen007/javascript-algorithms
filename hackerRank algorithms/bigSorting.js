function bigSorting(unsorted) {
  console.log(unsorted.sort((a, b) => a - b));
  let newArr = [];
  for (let i = 0; i < unsorted.length; i++) {
    newArr.push(Number(Math.floor(unsorted[i])));
  }
  newArr = newArr.sort((a, b) => a - b);
  return newArr;
}

bigSorting(["31415926535897932384626433832795", "1", "3", "10", "3", "5"]);
