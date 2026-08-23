import { Book } from "./Book.ts";
import { User } from "./User.ts";

export class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`[Thư viện] Đã thêm sách: "${book.title}"`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`[Thư viện] Đã đăng ký thành viên: ${user.name}`);
  }

  listBooks(): void {
    console.log("[Thư viện] Danh sách sách hiện có:", this.books.map((b) => b.title));
  }
}