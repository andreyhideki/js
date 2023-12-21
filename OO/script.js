//EX01
class Person {
    steps = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if (typeof newAge == 'number'){
            this.age = newAge;
        } else {
            console.log('Idade só pode ser numerico');
        }

    }
}

let p1 = new Person('Joao', 30);
let p2 = new Person('Jose', 20);
let p3 = new Person('Francisco', 40);

console.log(p1);
console.log(p2);
console.log(p3);
p1.takeAStep();
p2.takeAStep();
p3.takeAStep();
p1.takeAStep();
p2.takeAStep();
p1.takeAStep();
console.log(p1);
console.log(p2);
console.log(p3);
p1.setAge('asdasd');
console.log(p1);
p1.setAge(25);
console.log(p1);
