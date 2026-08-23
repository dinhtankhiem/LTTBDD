
export class Order {
  id: string;
  products: Product[] = [];

  constructor(id: string) {
    this.id = id;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }
}