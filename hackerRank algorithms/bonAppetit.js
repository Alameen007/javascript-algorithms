function bonAppetit(bill, k, b) {
  let actual =
    bill
      .filter(ele => {
        return bill[k] !== ele;
      })
      .reduce(function(previous, current) {
        return previous + current;
      }, 0) / 2;

  if (actual === b) {
    return "Bon Appetit";
  } else {
    return b - actual;
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7));
