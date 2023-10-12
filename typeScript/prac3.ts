function sum1(a: number, b: number) {
  console.log(a + b);
}
sum1(5, 11);

function sum2(...numbers: number[]) {
  return numbers.reduce((a: number, b: number) => a + b, 0);
}
function sum3(...rest: number[]) {
  const result = rest.reduce((acc, curr) => acc + curr, 0);
  return result;
}
console.log(sum2(1, 2, 3, 4, 10));
