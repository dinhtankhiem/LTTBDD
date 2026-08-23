export abstract class Appliance {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  abstract turnOn(): void;
}

export class Fan extends Appliance {
  turnOn(): void {
    console.log(`Quạt ${this.brand} đang quay và tạo gió mát.`);
  }
}

export class AirConditioner extends Appliance {
  temperature: number;

  constructor(brand: string, temperature: number) {
    super(brand);
    this.temperature = temperature;
  }

  turnOn(): void {
    console.log(`Máy lạnh ${this.brand} đang bật ở mức ${this.temperature}°C.`);
  }
}