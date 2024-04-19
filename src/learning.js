// type User = {
//   name: string;
//   age?: number;
//   isAdmin: boolean;
//   email: string;
//   password: string;
// };
// const user: User = {
//   name: "Paul",
//   isAdmin: false,
//   email: "paul@gmail.com",
//   password: "123456",
// };
// console.log(user);
// interface User {
//   name: string;
//   id: number;
// }
// function constructUser(name: string, id = 0): User {
//   if (!name || id === 0) {
//     console.log("Invalid input");
//     throw new Error("Invalid input");
//     // return { name: "Unknown", id: 0 };
//   }
//   return { name, id };
// }
// console.log(constructUser("", 23));
// let id: string | number = "210";
// type accordionState = "open" | "closed";
// const myAccordiion: accordionState = "closed";
// console.log(myAccordiion);
// const names: string[] = [];
// if (names.length > 0) {
//   console.log(names[0]);
// } else {
//   console.log("No name");
// }
// types
// const hello: string[] = [];
// type names = Array<string>;
// type marks = Array<number>;
// type students = Array<{ name: string; marks: number }>;
// const abakozi: names = [];
// abakozi.push("Paul");
// abakozi.push(12);
// abakozi.push(["12"]);
// console.log(abakozi);
// const getStudentsNames = (students: students) => {
//   return students.map((student) => student.name);
// };
// const names = getStudentsNames([
//   { name: "Paul", marks: 90 },
//   { name: "John", marks: 80 },
//   { name: "Peter", marks: 70 },
// ]);
// console.log(names);
// const logPoints = (point: Point) => console.log(point.x, point.y);
// const myp = { x: 10, y: 20, z: 30 };
// logPoints(myp);
// class Pointing {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const newPoint = new Pointing(10, 20);
// logPoints(newPoint);
var Student = /** @class */ (function () {
    function Student() {
        _Student_name.set(this, "Paul");
        this.age = 21;
        // this.#name = 'John'
    }
    Object.defineProperty(Student.prototype, "count", {
        get: function () {
            return Student.count;
        },
        set: function (value) {
            Student.count = value;
        },
        enumerable: false,
        configurable: true
    });
    var _Student_name;
    _Student_name = new WeakMap();
    Student.count = 0;
    return Student;
}());
var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(MyPoint.prototype, "distance", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        set: function (value) {
            console.log("Setting distance", value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPoint.prototype, "_x", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPoint.prototype, "_y", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    return MyPoint;
}());
var point = new MyPoint(-4, 5);
console.log(point.distance);
console.log(point._x);
// generic classes
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.n = "hello world";
    return Box;
}());
var box = new Box("Paul");
console.log(box.value);
var box1 = new Box(10);
console.log(box1.value);
var box2 = new Box("John");
console.log(box2.value);
console.log(Box.name);
// console.log(user.getName());
// console.log(user.setName("John"));
