// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)

class Rectange {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }

    // width 를 위한 getter
    get width() {
        return this.width;
    }

    // width 를 위한 setter
    set width(value) {
        // 검증 1 : valuse가 양수가 아니면 오류!
        if (value <= 0) {
            //
            console.log('[오류] 가로길이는 0보다 커야 합니다!');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!');
            return;
        }
        this._width = value;
    }
    // height 를 위한 getter
    get height() {
        return this._height;
    }

    // height 를 위한 setter
    set height(value) {
        // 검증 1 : valuse가 양수가 아니면 오류!
        if (value <= 0) {
            //
            console.log('[오류] 세로길이는 0보다 커야 합니다!');
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!');
            return;
        }
        this._height = value;
    }

    //getArea : 가로 * 세로 => 넓이
    getArea () {
        const a = this._width * this._height;
        console.log(`넓이는 => ${a}입니다.`);
    }
}

// instance 생성
const rect1 = new Rectange(10,17);
rect1.getArea();
// const rect2 = new Rectange(10,30);
// const rect3 = new Rectange(15,20);