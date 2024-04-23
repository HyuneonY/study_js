// while
// let i = 4;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// while (i < 100) {
//     if (i % 5 === 0) {
//         console.log(i + "는 5의 배수입니다!!");
//     }
//     i++;
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}