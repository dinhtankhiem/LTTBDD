export class Stack<T> {
  private elements: T[] = [];

  // Thêm phần tử vào đỉnh ngăn xếp
  push(element: T): void {
    this.elements.push(element);
  }

  // Lấy và xóa phần tử ở đỉnh ngăn xếp
  pop(): T | undefined {
    return this.elements.pop();
  }

  // Xem phần tử ở đỉnh ngăn xếp mà không xóa
  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  // Kiểm tra ngăn xếp có rỗng hay không
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}