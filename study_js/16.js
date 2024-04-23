// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push
let fruits1 = ["사과", "바나나"];
// console.log("1 => ", fruits1);

fruits1.push("오렌지");
// console.log("2 => ", fruits1);

// 3-1. pop
let fruits2 = ["사과", "바나나"];
// console.log("1 => ", fruits2);

fruits2.pop();
// console.log("2 => ", fruits2);

// 3-3. shift
let fruits3 = ["사과", "바나나", "키위"];
// console.log("1 => ", fruits3);

fruits3.shift();
// console.log("2 => ", fruits3);

// 3-4. unshift
let fruits4 = ["사과", "바나나", "키위"];
fruits4.unshift("포도");
// console.log(fruits4);

// 3-5. splice
let fruits5 = ["사과", "바나나", "키위"];
fruits5.splice(1, 1, "포도");
// console.log(fruits5);

// 3-6. slice
let fruits6 = ["사과", "바나나", "키위"];
let slicedFruits = fruits6.slice(1, 2);
// console.log(slicedFruits);


// forEach, map, filter, find
let numbers = [4, 1, 5, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// (1) forEach
// numbers.forEach(function (item) {
//     console.log("item입니다 => ", + item);
// });

// (2) map : 항상 원본 배열의 길이만큼이 return 된다.
// let newNumbers = numbers.map(function (item) {
//     return item * 2;
// })

// console.log(newNumbers);

// (3) filter
// let filteredNumbers = numbers.filter(function(item){
//     return item > 3;
// });

// console.log(filteredNumbers);

// (4) find
let result = numbers.find(function(item){
    return item > 3;
});

console.log(result);