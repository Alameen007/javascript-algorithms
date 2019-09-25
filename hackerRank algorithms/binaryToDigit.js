function binaryToDigit(s) {
  let digit = parseInt(s, 2);
  let count = 0;

  while (digit > 0) {
    if (digit % 2 === 0) {
      digit = digit / 2;
      count++;
    } else {
      digit--;
      count++;
    }
  }

  console.log(count);
  return count;
}



binaryToDigit("011100");

