// 클래스 연습해보기!

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//      다음 네 개의 값이 필수로 입력돼야 합니다!
//      (1) modelName
//      (2) modelYear
//      (3) type : 가솔린, 전기차, 디젤
//      (4) price

class Car {
    constructor (modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    // 클락션을 울리는 메서드
    makeNoise () {
        console.log(this.modelName + ": 빵!");
    }

    // 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
    printModelYear() {
        console.log(this.modelName + "은" + this.modelYear + "년도의 모델입니다.");
    }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("Palisade", "2010", "d", 4500);
car1.makeNoise();
car1.printModelYear();
car2.makeNoise();
car2.printModelYear();
car3.makeNoise();
car3.printModelYear();
