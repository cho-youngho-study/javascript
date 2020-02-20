const dog = {
    name: "dog",
    age: 20,
    status: "good"
};

const cat = {
    name: "cat",
    age: 22,
    status: "bad"
};

/* Object */

function print(animal) {
    const text = `${animal.name}은 ${animal.age}살 이고 상태는 ${animal.status} 입니다.`;
    console.log("Object : ", text);
}

print(dog);
print(cat);

/* Object - 비구조화 할당 */

function print(animal) {
    const {
        name,
        age,
        status
    } = animal;
    const text = `${name}은 ${age}살 이고 상태는 ${status} 입니다.`;
    console.log("Object - 비구조화 할당 : ", text);
}


function print(name, age, status) {
    const text = `${name}은 ${age}살 이고 상태는 ${status} 입니다.`;
    console.log("Object - 비구조화 할당 : ", text);
}

print(dog);
print(cat);

/* 객체 안에 함수 넣기 */

const ff = {
    name: "멍멍이",
    sound: "멍멍",
    say: function say() {
        console.log(this.sound);
    }
};

const dd = {
    name: "야옹이",
    sound: "야옹"
};

dd.say = ff.say;

ff.say();
dd.say();

/* 객체 getter, setter */

const getter = {
    a: 1,
    b: 2,
    get sum() { //특정값 조회할 때 사용
        console.log("sum 함수가 실행됩니다.");
        return this.a + this.b;
    }
}

const setter = {
    _name: "멍멍이",
    get name() {
        console.log("조회합니다.");
        return this._name;
    },
    set name(value) { //특정 값을 설정할 때 사용
        console.log("이름이 바뀝니다." + value);
        this._name = value;
    }
};

console.log(setter.name);
setter.name = "몽몽이";
console.log(setter.name);

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log("calculate");
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log(`a의 값이 바뀝니다.  ${value}`);
        this._a = value;
        this.calculate();
    },
    set b(value) {
        console.log(`b의 값이 바뀝니다. ${value}`);
        this._b = value;
        this.calculate();
    },
};

console.log(numbers.sum);
numbers.a = 6;
numbers.b = 10;
console.log(numbers.sum);