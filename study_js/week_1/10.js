// 화살표 함수
// ES6 신 문법
function add(x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y;
}

// 1-2. 한 줄로 (중괄호 안의 줄이 한 줄일 경우에만 가능하다)
let arrowFunc02 = (x, y) => x + y;

//
function testFunc(x) {
    return x;
}

// 화살표 함수로!
let arrowFunc03 = (x) => x;