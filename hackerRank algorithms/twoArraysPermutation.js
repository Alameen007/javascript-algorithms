function twoArrays(k, A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] + B[j] === k) {
        count++;
      }
    }
  }
 
  if (count === A.length) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
