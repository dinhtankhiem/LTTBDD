export class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} phát ra âm thanh.`);
  }
}

export class Dog extends Animal {
  override makeSound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

export class Cat extends Animal {
  override makeSound(): void {
    console.log(`${this.name} kêu: Meo meo!`);
  }
}