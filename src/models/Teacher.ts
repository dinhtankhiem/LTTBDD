import { Person } from "./Person";

export class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  introduce(): void {
    console.log(`Xin chào, tôi là giáo viên ${this.name}, ${this.age} tuổi, phụ trách môn ${this.subject}.`);
  }
}