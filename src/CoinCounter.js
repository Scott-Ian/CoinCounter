export function CoinCounter(number) {
  if (isNaN(number)) {
    return "invalid input";
  }

  const quarters = Math.floor(number / .25);
  return `Quarters: ${quarters}`;
}

// if(number > .25)
// {
//   let quarters = number / .25
//   change = number % .25
// }

// CoinCounter (number, coin = .25)
// {
//   if (number > coin) {
//     return "Quarters:" + CoinCounter(remainder, .10);
//   }
// }

