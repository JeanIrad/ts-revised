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
class Student {
  #name = "Paul";
  age = 21;
  private static count = 0;
  constructor() {
    // this.#name = 'John'
  }
  get count() {
    return Student.count;
  }
  set count(value) {
    Student.count = value;
  }
}
// const student = new Student();
// student.count = 10;
// console.log(hello);
// console.log(student.count);
interface Point {
  x: number;
  y: number;
}
class MyPoint implements Point {
  constructor(public x: number, public y: number) {}
  get distance() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  set distance(value) {
    console.log("Setting distance", value);
  }
  get _x() {
    return this.x;
  }
  get _y() {
    return this.y;
  }
}
const point = new MyPoint(-4, 5);
console.log(point.distance);
console.log(point._x);
// generic classes
class Box<Type> {
  static n = "hello world";
  constructor(public value: Type) {}
}
const box = new Box("Paul");
console.log(box.value);
const box1 = new Box(10);
console.log(box1.value);
const box2: Box<string> = new Box("John");
console.log(box2.value);
console.log(Box.name);

// console.log(user.getName());
// console.log(user.setName("John"));
