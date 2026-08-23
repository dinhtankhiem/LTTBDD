import type { IFlyable } from "./IFlyable";

export class Bird implements IFlyable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fly(): void {
    console.log(`${this.name} đang dang cánh bay trên bầu trời.`);
  }
}   