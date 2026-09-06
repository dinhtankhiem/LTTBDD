// Định nghĩa kiểu dữ liệu phản hồi từ API Todo
export interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Câu 21:
  export async function ex21_fetchTodo(id: number = 1): Promise<TodoItem> {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    console.log(`[Bài 21] Đang gọi API: ${url}...`);
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`Gọi API thất bại với mã trạng thái: ${response.status}`);
    }
  
    const data: TodoItem = await response.json();
    console.log("[Bài 21] Dữ liệu nhận được:", data);
    return data;
  }
  
  // Chạy thử nghiệm duy nhất bài 21:
//   ex21_fetchTodo(1);

// Câu 22:
    export async function ex22_fetchMultipleTodos(ids: number[]): Promise<TodoItem[]> {
        console.log(`[Bài 22] Bắt đầu gọi song song API cho các ID: [${ids.join(", ")}]...`);
        const startTime = Date.now();
    
        // Tạo mảng các Promise gọi API
        const requests = ids.map((id) => ex21_fetchTodo(id));
    
        // Chờ tất cả request hoàn thành đồng thời
        const results = await Promise.all(requests);
    
        console.log(`[Bài 22] Đã lấy xong ${results.length} mục trong ${Date.now() - startTime}ms:`);
        results.forEach((todo) => {
        console.log(`  - [ID: ${todo.id}] [${todo.completed ? "x" : " "}] ${todo.title}`);
        });
    
        return results;
    }
    
    // Chạy thử nghiệm duy nhất bài 22:
    // ex22_fetchMultipleTodos([1, 2, 3, 4]);

    // Câu 23:
    export async function ex23_fetchCompletedTodos(): Promise<TodoItem[]> {
        const url = "https://jsonplaceholder.typicode.com/todos";
        console.log("[Bài 23] Đang tải danh sách todos từ server...");
    
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Gọi API thất bại: ${response.status}`);
        }
    
        const todos: TodoItem[] = await response.json();
    
        // Lọc các công việc đã hoàn thành (completed === true)
        const completedTodos = todos.filter((todo) => todo.completed);
    
        console.log(
        `[Bài 23] Tổng số việc: ${todos.length} | Đã hoàn thành: ${completedTodos.length}`
        );
        console.log("  Top 3 việc đã hoàn thành:", completedTodos.slice(0, 3));
    
        return completedTodos;
    }
    
    // Chạy thử nghiệm duy nhất bài 23:
    // ex23_fetchCompletedTodos();

    // Định nghĩa kiểu dữ liệu tạo mới và phản hồi từ API Post
export interface PostPayload {
    title: string;
    body: string;
    userId: number;
  }
  
  export interface PostResponse extends PostPayload {
    id: number;
  }
  
  // Câu 24:
    export async function ex24_postData(payload: PostPayload): Promise<PostResponse> {
        const url = "https://jsonplaceholder.typicode.com/posts";
        console.log("[Bài 24] Đang gửi POST request tới:", url);
    
        const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
        });
    
        if (!response.ok) {
        throw new Error(`Gửi dữ liệu thất bại với mã: ${response.status}`);
        }
    
        const createdPost: PostResponse = await response.json();
        console.log("[Bài 24] Dữ liệu server đã tạo và trả về:", createdPost);
        return createdPost;
    }
    
    // Chạy thử nghiệm duy nhất bài 24:
    // ex24_postData({
    //     title: "Học TypeScript Asynchronous",
    //     body: "Thực hành fetch API với method POST và async/await",
    //     userId: 1,
    // });

    // Câu 25:
    export async function ex25_downloadFile(filename: string): Promise<string> {
        console.log(`[Bài 25] Bắt đầu tải tệp: "${filename}"... (vui lòng đợi 3s)`);
    
        // Giả lập tiến trình tải mất 3 giây (3000ms)
        await new Promise((resolve) => setTimeout(resolve, 3000));
    
        const message = `Tải thành công tệp: "${filename}"`;
        console.log(`[Bài 25] Hoàn tất: ${message}`);
        return message;
    }
    
    // Chạy thử nghiệm duy nhất bài 25:
    // ex25_downloadFile("document_day2_async.pdf");

    // Hàm tiện ích tạo khoảng dừng
    const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

    // Câu 26:
    export async function ex26_waitFiveSeconds(): Promise<void> {
    console.log("[Bài 26] Bắt đầu chờ 5 giây...");
    const startTime = Date.now();

    await delay(5000);

    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[Bài 26] Đã hoàn thành sau ${elapsedTime}s!`);
    }

    // Chạy thử nghiệm duy nhất bài 26:
    // ex26_waitFiveSeconds();

    // Câu 27:
export async function ex27_fetchWithRetry<T>(
    url: string,
    retries: number = 3,
    delayMs: number = 1000
  ): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`[Bài 27] Thử lần ${attempt}/${retries}: Gọi tới ${url}...`);
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Server báo mã lỗi: ${response.status}`);
        }
  
        const data: T = await response.json();
        console.log(`[Bài 27] Thành công ở lần thử thứ ${attempt}!`);
        return data;
      } catch (error: any) {
        console.log(`  > Lần ${attempt} thất bại: ${error.message}`);
  
        if (attempt === retries) {
          throw new Error(
            `[Bài 27] Đã thử tối đa ${retries} lần nhưng vẫn thất bại: ${error.message}`
          );
        }
  
        // Đợi một khoảng trước khi thử lại
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
  
    throw new Error("Lỗi không xác định");
  }
  
  // Chạy thử nghiệm duy nhất bài 27:
  async function testEx27() {
    // Test thử với một URL không tồn tại (sẽ thử 3 lần rồi báo lỗi)
    try {
      await ex27_fetchWithRetry("https://jsonplaceholder.typicode.com/invalid-url-404", 3);
    } catch (err: any) {
      console.log("[Bài 27] Kết quả cuối cùng:", err.message);
    }
  }
  
//   testEx27();

// Định nghĩa kiểu kết quả của từng tác vụ
export interface BatchResult {
    taskId: number;
    data: string;
    durationMs: number;
  }
  
  // Hàm giả lập tác vụ bất đồng bộ độc lập
  function processSingleTask(taskId: number, durationMs: number): Promise<BatchResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          taskId,
          data: `Dữ liệu của tác vụ #${taskId}`,
          durationMs,
        });
      }, durationMs);
    });
  }
  
    // Câu 28:
    export async function ex28_batchProcess(): Promise<BatchResult[]> {
        console.log("[Bài 28] Bắt đầu xử lý đồng thời lô 5 tác vụ...");
        const startTime = Date.now();
    
        // Khởi tạo lô (batch) gồm 5 tác vụ với thời gian xử lý khác nhau
        const taskBatch: Promise<BatchResult>[] = [
        processSingleTask(1, 800),
        processSingleTask(2, 1200),
        processSingleTask(3, 600),
        processSingleTask(4, 1500),
        processSingleTask(5, 900),
        ];
    
        // Chờ cả 5 tác vụ hoàn thành đồng thời
        const results = await Promise.all(taskBatch);
    
        const totalTime = Date.now() - startTime;
        console.log(`[Bài 28] Đã xử lý xong toàn bộ lô 5 tác vụ trong ${totalTime}ms (~1500ms):`);
        results.forEach((res) => {
        console.log(`  - Tác vụ #${res.taskId} hoàn thành sau ${res.durationMs}ms`);
        });
    
        return results;
    }
    
    // Chạy thử nghiệm duy nhất bài 28:
    // ex28_batchProcess();

    // Định nghĩa kiểu cho tác vụ hàng đợi
export type QueueTask<T> = () => Promise<T>;

    // Câu 29:
    export async function ex29_queueProcess<T>(tasks: QueueTask<T>[]): Promise<T[]> {
    console.log(`[Bài 29] Bắt đầu xử lý hàng đợi (Queue) gồm ${tasks.length} tác vụ...`);
    const startTime = Date.now();
    const results: T[] = [];

    for (let i = 0; i < tasks.length; i++) {
        const taskNumber = i + 1;
        console.log(`  [Queue] Đang thực thi tác vụ #${taskNumber}...`);

        // Thực thi tuần tự từng tác vụ và đợi hoàn tất trước khi sang tác vụ tiếp theo
        const result = await tasks[i]();
        results.push(result);

        console.log(`  [Queue] Tác vụ #${taskNumber} xong tại +${Date.now() - startTime}ms`);
    }

    console.log(`[Bài 29] Toàn bộ hàng đợi hoàn tất sau: ${Date.now() - startTime}ms`);
    return results;
    }

        // Chạy thử nghiệm duy nhất bài 29:
        async function testEx29() {
        // Định nghĩa các hàm trả về Promise (thực thi khi được gọi)
        const taskQueue: QueueTask<string>[] = [
            () => new Promise((resolve) => setTimeout(() => resolve("Kết quả tác vụ 1"), 500)),
            () => new Promise((resolve) => setTimeout(() => resolve("Kết quả tác vụ 2"), 700)),
            () => new Promise((resolve) => setTimeout(() => resolve("Kết quả tác vụ 3"), 400)),
        ];

        const finalResults = await ex29_queueProcess(taskQueue);
        console.log("[Bài 29] Kết quả danh sách trả về:", finalResults);
        }

        // testEx29();

        // Câu 30:
export async function ex30_handleAllSettled(endpoints: string[]): Promise<void> {
  console.log(`[Bài 30] Đang gửi yêu cầu tới ${endpoints.length} endpoints...`);

  // Tạo mảng các Promise gọi API
  const fetchPromises = endpoints.map(async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    return response.json();
  });

  // Chờ tất cả Promise kết thúc dù thành công hay thất bại
  const results = await Promise.allSettled(fetchPromises);

  console.log("[Bài 30] Kết quả trạng thái từng request:");
  results.forEach((res, index) => {
    const url = endpoints[index];
    if (res.status === "fulfilled") {
      console.log(`  > [Thành công] ${url}`);
      console.log(`    Dữ liệu:`, JSON.stringify(res.value));
    } else {
      console.log(`  > [Thất bại] ${url}`);
      console.log(`    Lý do: ${res.reason?.message || res.reason}`);
    }
  });
}

// Chạy thử nghiệm duy nhất bài 30:
const testEndpoints = [
  "https://jsonplaceholder.typicode.com/todos/1",          // Hợp lệ (200 OK)
  "https://jsonplaceholder.typicode.com/todos/invalid-404", // Lỗi 404
  "https://jsonplaceholder.typicode.com/posts/2",           // Hợp lệ (200 OK)
];

ex30_handleAllSettled(testEndpoints);