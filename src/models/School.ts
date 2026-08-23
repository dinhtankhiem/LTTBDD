import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
  name: string;
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log(`=== TRƯỜNG HỌC: ${this.name.toUpperCase()} ===`);
    console.log(`Tổng số giáo viên: ${this.teachers.length}`);
    this.teachers.forEach((t) => console.log(` - GV: ${t.name} (Môn: ${t.subject})`));
    
    console.log(`Tổng số học sinh: ${this.students.length}`);
    this.students.forEach((s) => console.log(` - HS: ${s.name} (Xếp loại: ${s.grade})`));
  }
}