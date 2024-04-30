// bind 메서드
// -> this를 바인딩 하는 메서드
// call, apply와는 좀 달라요! 즉시 호출하지는 않아요.

// [목적]
// 1. 함수에 This를 '미리' 적용해요.
// 2. 부분 적용 함수!

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
// func(1, 2, 3, 4);

// 함수에 this를 미리 적용!
var bindFunc1 = func.bind({ x: 1 });
// bindFunc1(5, 6, 7, 8);

// 부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
// bindFunc2(6, 7);
bindFunc2(10, 11);

console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);

// name 프로퍼티!!
// bind - 'bound' 라는 접두어!
