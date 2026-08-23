// Lớp cha 
export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Lớp con dog
export class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Gâu gâu!`);
  }
}

// Lớp con cat
export class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} says: Meo meo!`);
  }
}