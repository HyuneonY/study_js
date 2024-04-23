// 일급객체로써의 함수 (2)
const person = {
    name: 'John',
    age: 31,
    isMarried: true,
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`);
    // }
    sayHello: function () { 
        console.log(`Hello, My name is ${this.name}`);
    }
};

person.sayHello();