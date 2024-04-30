var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    },
};

// method 함수 안의 this는 항상 obj!!
// obj.method(2, 3);

obj.method.apply({ a: 4 }, [5, 6]);