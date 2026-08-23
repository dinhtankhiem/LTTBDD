// Lớp cha Employee
export class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

// Lớp con Manager kế thừa Employee
export class Manager extends Employee {
  department: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }

  conductMeeting(): void {
    console.log(`${this.name} đang điều hành cuộc họp của phòng ban ${this.department}.`);
  }
}

// Lớp con Developer kế thừa Employee
export class Developer extends Employee {
  programmingLanguage: string;

  constructor(name: string, salary: number, programmingLanguage: string) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  writeCode(): void {
    console.log(`${this.name} đang lập trình dự án bằng ngôn ngữ ${this.programmingLanguage}.`);
  }
}