export function CoinCounter(numb) {
  if (isNaN(numb)) {
    return "invalid input";
  }

  if (numb < 1) {
    return "invalid input: number must be in pennies and more than or equal to 1";
  }

  if(numb % 1 != 0){
    return "invalid input: input must be a whole number";
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

    return `Pennies: ${Math.floor(numb)}`;
}