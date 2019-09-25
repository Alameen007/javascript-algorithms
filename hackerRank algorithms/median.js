function getMedian(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    var mid1 = arr[arr.length / 2 - 1];
    var mid2 = arr[arr.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

console.log(getMedian([0, 1, 2, 4, 6, 5, 3]));
