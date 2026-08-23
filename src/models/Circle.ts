import { Shape } from "./Shape";

export class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Bắt buộc phải ghi đè hàm area()
  area(): number {
    return Math.PI * this.radius * this.radius; // Pi * r^2
  }
}