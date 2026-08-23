import { Person } from "./Person";

export class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); // Gọi lại constructor của lớp cha Person
    this.grade = grade;
  }

  displayAllInfo(): void {
    console.log(`[Student] Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}