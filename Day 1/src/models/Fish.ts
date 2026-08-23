import type { ISwimmable } from "./ISwimmable";

export class Fish implements ISwimmable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log(`${this.name} đang bơi lội tung tăng dưới nước.`);
  }
}