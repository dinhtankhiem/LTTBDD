export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Thuộc tính protected chỉ cho phép lớp cha và các lớp con kế thừa gọi
  protected makeSound(): string {
    return "Âm thanh động vật";
  }
}

export class Dog extends Animal {
  protected override makeSound(): string {
    return "Gâu gâu";
  }

  bark(): void {
    // Gọi phương thức protected từ bên trong class con
    console.log(`${this.name} kêu: ${this.makeSound()}`);
  }
}

export class Cat extends Animal {
  protected override makeSound(): string {
    return "Meo meo";
  }

  meow(): void {
    // Gọi phương thức protected từ bên trong class con
    console.log(`${this.name} kêu: ${this.makeSound()}`);
  }
}