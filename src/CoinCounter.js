export function CoinCounter(numb) {
  // if (isNaN(number)) {
  //   return "invalid input";
  // } else if (number > .25) {
  //   const quarters = Math.floor(number / .25);
  //   const remainder = number % .25;
  //   return `Quarters: ${quarters}`;
  // }

  if (isNaN(numb)) {
    return "invalid input";
  }

  if (numb < 1) {
    return "invalid input: number must be in pennies and more than or equal to 1";
  }

  if (numb >= 25) {
    const changeMade = Math.floor(numb / 25);
    return `Quarters: ${changeMade}, ` + CoinCounter(numb - (changeMade * 25));
  }

  if (numb / 10 >= 1) {
    return `Dimes: ${Math.floor(numb / 10)}, ` + CoinCounter((numb % 10));
  }

  if (numb / 5 >= 1) {
    return `Nickels: ${Math.floor(numb / 5)}, ` + CoinCounter((numb % 5));
  }
  
    return `Pennies: ${Math.floor(numb)} `;
}



// if(number > .25)
// {
//   let quarters = number / .25
//   change = number % .25
// }

// CoinCounter (number, coin = .25)
// {
//   if (number > .25) {
//     return "Quarters: " + "Dimes: "CoinCounter(remainder) + "Nickels: CoinCounter(remainder) + "Pennies: CoinCounter(remainder)"; 
//   }
// }

// What should return on each iteration?
// A: A coin declaration and amount i.e., "Quarters: 3" or "Pennies: 4"

// function  (numb) {

//   if (numb >= .25) {
//     return `Quarters: ${ Math.floor(numb / .25) } ` + function ((numb % .25));
//   }

//   if (numb / .1 >= 1) {
//     return `Dimes: + ${ Math.floor(numb / .1) } ` + function (numb % .1);
//   }

//   if (numb / .05 >= 1) {
//     return `Nickels: +${ Math.floor(numb / .05) } ` + function (numb % .05);
//   }

//   if (numb <= 4 && numb > 0) {
//     return `Pennies: { numb } `
//   }
// }