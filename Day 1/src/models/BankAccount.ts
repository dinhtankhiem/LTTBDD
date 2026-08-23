export class BankAccount {
  balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited: $${amount}. Current balance: $${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdraw amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log(`Insufficient balance! Current balance: $${this.balance}`);
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn: $${amount}. Current balance: $${this.balance}`);
  }
}