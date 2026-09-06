import { 
    ex1_createHelloAsyncPromise, 
    ex5_simulateTask, 
    ex3_rejectWithError 
  } from "./partA_promise.js";
  
  
  // Câu 11:
  export async function ex11_getHelloAsyncAwait(): Promise<string> {
    const result = await ex1_createHelloAsyncPromise();
    console.log(`[Bài 11] Kết quả từ async/await: ${result}`);
    return result;
  }
  // ex11_getHelloAsyncAwait();
  
  // Câu 12:
  export async function ex12_callSimulateTask(): Promise<void> {
    console.log("[Bài 12] Bắt đầu gọi simulateTask(2000)...");
    const result = await ex5_simulateTask(2000);
    console.log(`[Bài 12] Kết quả log: ${result}`);
  }
  // ex12_callSimulateTask();
  
  // Câu 13:
  export async function ex13_handleErrorWithTryCatch(): Promise<void> {
    try {
      console.log("[Bài 13] Đang gọi hàm có lỗi...");
      await ex3_rejectWithError();
    } catch (error) {
      if (error instanceof Error) {
        console.log(`[Bài 13] Đã bắt được lỗi qua try/catch: ${error.message}`);
      } else {
        console.log(`[Bài 13] Lỗi không xác định: ${String(error)}`);
      }
    }
  }
  // ex13_handleErrorWithTryCatch();
  
  // Câu 14:
  export async function ex14_multiplyByThree(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = num * 3;
    console.log(`[Bài 14] Đầu vào: ${num} -> Sau 1s -> Kết quả: ${result}`);
    return result;
  }
  // ex14_multiplyByThree(7);
  
  // Câu 15:
  export async function ex15_callSequentially(): Promise<void> {
    console.log("[Bài 15] Bắt đầu chuỗi gọi tuần tự:");
    const startTime = Date.now();
  
    const step1 = await ex5_simulateTask(600);
    console.log(`  > Bước 1 xong tại +${Date.now() - startTime}ms: ${step1}`);
  
    const step2 = await ex5_simulateTask(800);
    console.log(`  > Bước 2 xong tại +${Date.now() - startTime}ms: ${step2}`);
  
    const step3 = await ex5_simulateTask(500);
    console.log(`  > Bước 3 xong tại +${Date.now() - startTime}ms: ${step3}`);
  
    console.log(`[Bài 15] Toàn bộ hoàn tất sau: ${Date.now() - startTime}ms`);
  }
  // ex15_callSequentially();
  
  // Câu 16:
  export async function ex16_callInParallel(): Promise<string[]> {
    console.log("[Bài 16] Bắt đầu gọi song song với Promise.all():");
    const startTime = Date.now();
  
    const p1 = ex5_simulateTask(1000);
    const p2 = ex5_simulateTask(1000);
    const p3 = ex5_simulateTask(1000);
  
    const results = await Promise.all([p1, p2, p3]);
  
    const totalTime = Date.now() - startTime;
    console.log(`[Bài 16] Hoàn tất 3 tác vụ trong ${totalTime}ms (~1000ms):`, results);
    return results;
  }
  // ex16_callInParallel();
  
  // Câu 17:
  export async function ex17_forAwaitOf(): Promise<void> {
    const promises: Promise<string>[] = [
      new Promise((resolve) => setTimeout(() => resolve("Mục 1 (sau 300ms)"), 300)),
      new Promise((resolve) => setTimeout(() => resolve("Mục 2 (sau 500ms)"), 500)),
      new Promise((resolve) => setTimeout(() => resolve("Mục 3 (sau 400ms)"), 400))
    ];
  
    console.log("[Bài 17] Duyệt qua mảng Promises bằng 'for await...of':");
    for await (const item of promises) {
      console.log(`  [for await] Nhận giá trị: ${item}`);
    }
  }
  
  // Chạy duy nhất bài 17:
  //ex17_forAwaitOf();

  // Định nghĩa kiểu dữ liệu User
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  // Câu 18:
  export async function ex18_fetchUser(id: number): Promise<User> {
    // Chờ 1 giây để giả lập thời gian phản hồi từ API mạng
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const user: User = {
      id,
      name: `User_${id}_Student`,
      email: `student.${id}@school.edu.vn`,
      role: id === 1 ? "Admin" : "Member",
    };
  
    console.log(`[Bài 18] fetchUser(${id}) xong:`, JSON.stringify(user));
    return user;
  }
  
  // Chạy thử nghiệm duy nhất bài 18:
  //ex18_fetchUser(1);

  // Câu 19:
    export async function ex19_fetchUsers(ids: number[]): Promise<User[]> {
        console.log(`[Bài 19] Đang lấy thông tin các User có ID: [${ids.join(", ")}]...`);
        
        // Biến đổi từng id thành một Promise gọi hàm ex18_fetchUser
        const userPromises = ids.map((id) => ex18_fetchUser(id));
        
        // Chờ tất cả user tải xong đồng thời
        const users = await Promise.all(userPromises);
        
        console.log(`[Bài 19] Đã nạp thành công ${users.length} người dùng.`);
        return users;
    }
    
    // Chạy thử nghiệm duy nhất bài 19:
    // ex19_fetchUsers([1, 2, 3]);

    // Câu 20:
    export async function ex20_fetchUserWithTimeout<T>(
        promise: Promise<T>,
        timeoutMs: number = 2000
    ): Promise<T> {
        let timer: NodeJS.Timeout;
    
        const timeoutPromise = new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
            reject(new Error(`Hết thời gian chờ (Timeout): Quá ${timeoutMs}ms!`));
        }, timeoutMs);
        });
    
        try {
        const result = await Promise.race([promise, timeoutPromise]);
        clearTimeout(timer!);
        return result;
        } catch (error) {
        clearTimeout(timer!);
        throw error;
        }
    }
    
    // Chạy thử nghiệm duy nhất bài 20:
    async function testEx20() {
        // Test 1: Nhanh (1s) -> Thành công
        try {
        const user = await ex20_fetchUserWithTimeout(ex18_fetchUser(1), 2000);
        console.log("[Bài 20] Test 1 thành công:", user.name);
        } catch (err: any) {
        console.log("[Bài 20] Test 1 lỗi:", err.message);
        }
    
        // Test 2: Chậm (3s) -> Ném lỗi timeout
        const slowTask = new Promise<string>((resolve) =>
        setTimeout(() => resolve("Dữ liệu về muộn"), 3000)
        );
    
        try {
        await ex20_fetchUserWithTimeout(slowTask, 2000);
        } catch (err: any) {
        console.log("[Bài 20] Test 2 bắt được lỗi:", err.message);
        }
    }
    
    testEx20();