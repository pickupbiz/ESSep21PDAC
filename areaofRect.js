const areaofRect = (l, b) => l * b;
//hoisting allowed in case of var declaration
let result;
result = areaofRect(30, 40);
result = areaofRect(150, 50);
result = areaofRect(70, 225);
console.log(result);
