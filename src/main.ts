import { Person } from "./models/Person";
import { Student } from "./models/Student";
import { Car } from "./models/Car";
import { Rectangle } from "./models/Rectangle";
import { BankAccount } from "./models/BankAccount";
import { Book } from "./models/Book";
import { User } from "./models/User";
import { Product } from "./models/Product";
import type { IAnimal } from "./models/IAnimal";
import { Account } from "./models/Account";
import { Animal, Dog, Cat } from "./models/Animal";
import { Bird } from "./models/Bird";
import { Fish } from "./models/Fish";
import { Square } from "./models/Square";
import { Circle } from "./models/Circle";
import { Manager, Developer } from "./models/Employee";
import { Library } from "./models/Library";
import { Box } from "./data-structures/Box";
import { Logger } from "./services/Logger";
import { MemoryRepository } from "./repositories/Repository";
import { Stack } from "./data-structures/Stack";
import { findIndex } from "./utils/findIndex";
import { Repository } from "./models/GenericRepository";
import { CashPayment, CardPayment } from "./models/Payment";
import { Fan, AirConditioner } from "./models/Appliance";
import { Shape as StaticShape } from "./models/StaticShape";
import { Teacher } from "./models/Teacher";
import { Dog as ProtectedDog, Cat as ProtectedCat } from "./models/ProtectedAnimal";
import { Order } from "./models/Order";
import { Stack as CustomStack } from "./models/CustomStack";
import { Car as MovableCar, Robot } from "./models/Movable";
import { School } from "./models/School";
import { MathUtil } from "./utils/MathUtil";
import { Animal as BaseAnimal, Dog as SubDog, Cat as SubCat } from "./models/PolyAnimal.js";



console.log("--- BÀI 1 ---");
const person1 = new Person("Dinh Tan Khiem", 22);
person1.displayInfo();

console.log("\n--- BÀI 2 ---");
const student1 = new Student("Dinh Tan Khiem", 22, "A+");
student1.displayAllInfo();

console.log("\n--- BÀI 3 ---");
const car1 = new Car("Toyota", "Camry", 2026);
car1.showInfo();

console.log("\n--- BÀI 4 ---");
const rect = new Rectangle(5, 10);
console.log(`Rectangle Width: ${rect.width}, Height: ${rect.height}`);
console.log(`Area: ${rect.calculateArea()}`);
console.log(`Perimeter: ${rect.calculatePerimeter()}`);

console.log("\n--- BÀI 5 ---");
const myAcc = new BankAccount(100);
myAcc.deposit(50);
myAcc.withdraw(70);
myAcc.withdraw(200);

console.log("\n--- BÀI 6 ---");
const book1 = new Book("Clean Code", "Robert C. Martin", 2008);
book1.displayDetails();

console.log("\n--- BÀI 7 ---");
const user1 = new User("Lionel Messi");
console.log(`Initial Name: ${user1.name}`);
user1.name = "Khiem Dinh";
console.log(`Updated Name: ${user1.name}`);

console.log("\n--- BÀI 8 ---");
const products: Product[] = [
  new Product("Chuột máy tính", 25),
  new Product("Bàn phím cơ", 150),
  new Product("Màn hình 4K", 350)
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log("Danh sách sản phẩm có giá > 100:");
console.log(expensiveProducts);

console.log("\n--- BÀI 10 ---");
const myAccount = new Account("VN123456", 5000);
console.log(`Số tài khoản (public): ${myAccount.accountNumber}`);
console.log(`Số dư (private): $${myAccount.getBalance()}`);
console.log(`Ngày tạo (readonly): ${myAccount.createdAt.toLocaleDateString()}`);

console.log("\n--- BÀI 11 ---");
const dog = new Dog("Vang");
dog.bark();
const cat = new Cat("Mi");
cat.meow();

console.log("\n--- BÀI 12 ---");
const myBird = new Bird("Đại bàng");
myBird.fly();

const myFish = new Fish("Cá mập");
myFish.swim();

console.log("\n--- BÀI 13 ---");
const mySquare = new Square(5);
console.log(`Diện tích hình vuông (cạnh 5): ${mySquare.area()}`);

const myCircle = new Circle(4);
console.log(`Diện tích hình tròn (bán kính 4): ${myCircle.area().toFixed(2)}`);

console.log("\n--- BÀI 14 ---");
const manager = new Manager("Alice", 5000, "Kỹ thuật");
manager.conductMeeting();

const dev = new Developer("Khiêm", 3000, "TypeScript");
dev.writeCode();

console.log("\n--- BÀI 15 ---");
const lib = new Library();
lib.addBook(new Book("Clean Architecture", "Robert C. Martin", 2017));
lib.addUser(new User("Khiem Dinh"));
lib.listBooks();

console.log("\n--- BÀI 16 ---");
const stringBox = new Box<string>("Thong diep bi mat");
console.log(`String Box chua: ${stringBox.getContent()}`);

const numberBox = new Box<number>(2026);
console.log(`Number Box chua: ${numberBox.getContent()}`);

console.log("\n--- BÀI 17 ---");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("He thong khoi dong thanh cong.");
logger2.log("Nguoi dung da dang nhap.");
console.log(`logger1 va logger2 la cung 1 the hien: ${logger1 === logger2}`);


console.log("\n--- BÀI 18 (MathUtil) ---");
console.log(`Cộng: 10 + 5 = ${MathUtil.add(10, 5)}`);
console.log(`Trừ: 10 - 5 = ${MathUtil.subtract(10, 5)}`);
console.log(`Nhân: 10 * 5 = ${MathUtil.multiply(10, 5)}`);
console.log(`Chia: 10 / 5 = ${MathUtil.divide(10, 5)}`);


console.log("\n--- BÀI 19 (Polymorphism & Overriding) ---");
// Khai báo một mảng các đối tượng thuộc kiểu lớp cha Animal
const animalList: BaseAnimal[] = [
  new SubDog("Cậu Vàng"),
  new SubCat("Mimi"),
  new BaseAnimal("Động vật vô danh")
];

// Tính đa hình: Cùng gọi hàm makeSound() nhưng mỗi đối tượng con tự thực thi hành vi riêng
animalList.forEach((animal) => {
  animal.makeSound();
});

console.log("\n--- BÀI 20 ---");
const numbers = [10, 25, 30, 45, 50];
const indexNum = findIndex(numbers, (n) => n === 30);
console.log(`Vị trí của số 30: ${indexNum}`);

const names = ["An", "Bình", "Khiêm", "Dũng"];
const indexName = findIndex(names, (name) => name === "Khiêm");
console.log(`Vị trí của "Khiêm": ${indexName}`);

const notFound = findIndex(numbers, (n) => n === 999);
console.log(`Vị trí số 999 (không tồn tại): ${notFound}`);

console.log("\n--- BÀI 21 ---");
const nameRepo = new Repository<string>();
nameRepo.add("Khiêm");
nameRepo.add("Bình");
console.log("Danh sách chuỗi:", nameRepo.getAll());

const numRepo = new Repository<number>();
numRepo.add(100);
numRepo.add(200);
console.log("Danh sách số:", numRepo.getAll());

console.log("\n--- BÀI 22 ---");
const st = new CustomStack<number>();
st.push(10);
st.push(20);
console.log("Đỉnh stack:", st.peek());
console.log("Lấy ra:", st.pop());
console.log("Stack rỗng không?", st.isEmpty());

console.log("\n--- BÀI 23 ---");
const cash = new CashPayment();
cash.pay(50);

const card = new CardPayment("9704-xxxx-1234");
card.pay(120);

console.log("\n--- BÀI 24 ---");
const fan = new Fan("Senko");
fan.turnOn();

const ac = new AirConditioner("Daikin", 24);
ac.turnOn();

console.log("\n--- BÀI 25 ---");
StaticShape.describe();

console.log("\n--- BÀI 26 ---");
const order = new Order("DH-001");
order.addProduct(new Product("Tai nghe", 50));
order.addProduct(new Product("Chuột Gaming", 80));
console.log(`Đơn hàng ${order.id} có tổng tiền là: $${order.calculateTotal()}`);

console.log("\n--- BÀI 27 ---");
const teacher = new Teacher("Thầy Hưng", 38, "Lập trình di động");
teacher.introduce();

console.log("\n--- BÀI 28 ---");
const pDog = new ProtectedDog("Husky");
pDog.bark();

const pCat = new ProtectedCat("Mèo mướp");
pCat.meow();

console.log("\n--- BÀI 29 ---");
const mCar = new MovableCar("Honda Civic");
const robot = new Robot("RB-X200");
mCar.move();
robot.move();

console.log("\n--- BÀI 30 ---");
const school = new School("Đại học Công nghiệp TP.HCM");
school.addTeacher(new Teacher("Thầy An", 40, "Toán cao cấp"));
school.addStudent(new Student("Đinh Tấn Khiêm", 22, "A+"));
school.displayInfo();