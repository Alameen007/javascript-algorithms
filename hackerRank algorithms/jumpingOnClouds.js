function jumpingOnClouds(c) {
  let current = c[0];
  let count = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 1) {
      continue;
    } else if (i === current + 1 || i === current + 2) {
      current = i;
      count++;
    }
  }
  if (c[1] !== 1) {
    count--;
  }
  return count;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
