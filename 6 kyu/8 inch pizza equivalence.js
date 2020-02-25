// 8 inch pizza equivalence

/*
How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is:
How many 8-inch pizzas "fit" in a 16-incher?

The answer, as it turns out, is exactly four 8-inch pizzas.
For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices
(one 8-inch pizza = 8 slices), e.g.:

how_many_pizzas(16) -> "pizzas: 4, slices: 0"
how_many_pizzas(12) -> "pizzas: 2, slices: 2"
how_many_pizzas(8) -> "pizzas: 1, slices: 0"
how_many_pizzas(6) -> "pizzas: 0, slices: 5"
how_many_pizzas(0) -> "pizzas: 0, slices: 0"
Get coding quick, so you can choose the ideal size for your next meal!
FUNDAMENTALS   GEOMETRY   ALGEBRA   MATHEMATICS   ALGORITHMS   NUMBERS
 */

function howManyPizzas(n){
  const S8 = Math.PI * 64;
  let Sn = Math.PI * (n ** 2);
  let pizzas = Math.trunc(Sn / S8);
  let slices = Math.round((Sn / S8 - pizzas) * 8);
  console.log(n);
  return n >= 8
    ? `pizzas: ${pizzas}, slices: ${slices}`
    : `pizzas: ${pizzas}, slices: ${Math.round(Sn / S8 * 8)}`
}

// calculate using numbers of slices

