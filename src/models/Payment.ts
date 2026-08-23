export interface Payment {
  pay(amount: number): void;
}

export class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán tiền mặt thành công: $${amount}`);
  }
}

export class CardPayment implements Payment {
  cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`Thanh toán qua thẻ [${this.cardNumber}] thành công: $${amount}`);
  }
}