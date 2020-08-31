function CoinCounterClosure(quarters) {
  if (isNaN(quarters)) {
    return "invalid input";
  } else {
    return function (dimes) {
      return function (nickels) {
        return function (pennies) {
          return (quarters * .25) + (dimes * .10) + (nickels * .5) + (pennies * .01);
        }
      }
    }
  }
}
console.log(CoinCounterClosure(8)(6)(4)(4));

// return function (var 2)
//   {
//     return function (var3) {
//       return termination point;
//     }
//   }
