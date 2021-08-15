let a = 0;
let b = 1;
let temp = {};
//upto how many range
let num = 4;
console.log(a);
console.log(b);
for (let i = 1; i <= num; i++) {
  temp = a + b;
  a = b;
  b = temp;

  console.log(temp);
}
