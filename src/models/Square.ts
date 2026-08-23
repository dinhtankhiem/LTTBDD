import { Shape } from "./Shape.ts";

export class Square extends Shape {
  side: number;

  constructor(side: number) {
    super(); // Bắt buộc phải gọi super() khi kế thừa
    this.side = side;
  }

  // Bắt buộc phải ghi đè hàm area()
  area(): number {
    return this.side * this.side; // Cạnh nhân cạnh
  }
}