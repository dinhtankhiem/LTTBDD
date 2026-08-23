export interface IMovable {
  move(): void;
}

export class Car implements IMovable {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  move(): void {
    console.log(`Xe hơi ${this.model} đang lăn bánh trên đường nhựa.`);
  }
}

export class Robot implements IMovable {
  code: string;

  constructor(code: string) {
    this.code = code;
  }

  move(): void {
    console.log(`Robot mã số ${this.code} đang bước đi bằng hai chân tự hành.`);
  }
}