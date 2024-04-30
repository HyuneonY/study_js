var numbers = [10, 20, 3, 16, 45];

// var max = Math.max.apply(null, numbers);
// var max = Math.min.apply(null, numbers);

// console.log("apply => ", max, min);

// // spread operator
// console.log(numbers);
// console.log(...numbers);

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log("spread => ", max, min);
