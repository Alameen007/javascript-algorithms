function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b);
  let count = 0;
  let addition = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= k) {
      return count;
    } else {
      if (addition >= k) {
        console.log(count);
        return count;
      } else {
        addition += prices[i];
        count++;
      }
    }
  }

  return count;
}

console.log(maximumToys([3, 7, 4, 9, 4], 15));
