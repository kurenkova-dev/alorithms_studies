//алгоритм для быстрого возведения числа а в степень n при достаточно большом n
//выполняеся не за линейное, а за логарифмическое время

let a = 2;
let n = 50; 

function fastPow (a, n){
  let result = 0;
  if(n%2 == 0) {
    result = (a**(Math.floor(n/2)))**2;
  } else {
    result = a*((a**(Math.floor(n/2)))**2)
  }
  console.log(result)
}
