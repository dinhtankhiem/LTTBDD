
//Cau 1
export function ex1_createHelloAsyncPromise(): Promise<string> {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("Hello Async");
      }, 2000);
    });
  }
  
  // Chạy thử nghiệm:
//   ex1_createHelloAsyncPromise().then((result) => {
//     console.log(`[Bài 1] Kết quả sau 2s: "${result}"`);
//   });

  //cau 2
  export function ex2_resolveNumber10(): Promise<number> {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });
  }
  
  // Chạy thử nghiệm:
//   ex2_resolveNumber10().then((num) => {
//     console.log(`[Bài 2] Kết quả resolve sau 1s: ${num}`);
//   });


  //Cau 3
  export function ex3_rejectWithError(): Promise<string> {
    return new Promise<string>((_, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }
  
  // Chạy thử nghiệm:
//   ex3_rejectWithError().catch((error: Error) => {
//     console.log(`[Bài 3] Đã bắt được lỗi: "${error.message}"`);
//   });


  // Cau 4:
  export function ex4_handleRandomNumberPromise(): Promise<void> {
    const randomPromise = new Promise<number>((resolve, reject) => {
      const num = Math.random();
      if (num >= 0.5) {
        resolve(num);
      } else {
        reject(new Error(`Số ngẫu nhiên quá nhỏ: ${num.toFixed(4)} (< 0.5)`));
      }
    });
  
    return randomPromise
      .then((result) => {
        console.log(`[Bài 4] Thành công! Số ngẫu nhiên nhận được: ${result.toFixed(4)}`);
      })
      .catch((error: Error) => {
        console.log(`[Bài 4] Bị từ chối (Rejection): ${error.message}`);
      });
  }
  
  // Chạy thử nghiệm:
  //ex4_handleRandomNumberPromise();


  // Câu 5:
    export function ex5_simulateTask(time: number): Promise<string> {
        return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
        });
    }
    
    // Chạy thử nghiệm:
    // ex5_simulateTask(1000).then((res) => {
    //     console.log(`[Bài 5] simulateTask(1000) hoàn thành: "${res}"`);
    // });

    // Câu 6:
    export function ex6_runParallelTasks(): Promise<string[]> {
    const task1 = ex5_simulateTask(500);
    const task2 = ex5_simulateTask(1000);
    const task3 = ex5_simulateTask(1500);

    return Promise.all([task1, task2, task3]).then((results) => {
        console.log("[Bài 6] Kết quả 3 tác vụ chạy song song:", results);
        return results;
    });
    }

    // Chạy thử nghiệm:
    // ex6_runParallelTasks();


    // Câu 7:
    export function ex7_racePromises(): Promise<string> {
        const slowTask = new Promise<string>((resolve) =>
        setTimeout(() => resolve("Tác vụ chậm (1500ms)"), 1500)
        );
        const fastTask = new Promise<string>((resolve) =>
        setTimeout(() => resolve("Tác vụ nhanh (300ms) thắng cuộc!"), 300)
        );
        const mediumTask = new Promise<string>((resolve) =>
        setTimeout(() => resolve("Tác vụ vừa (800ms)"), 800)
        );
    
        return Promise.race([slowTask, fastTask, mediumTask]).then((winner) => {
        console.log(`[Bài 7] Kết quả Promise.race(): ${winner}`);
        return winner;
        });
    }
    
    // Chạy thử nghiệm:
    // ex7_racePromises();

    // Câu 8:
    export function ex8_promiseChain(initialValue: number = 2): Promise<number> {
        return Promise.resolve(initialValue)
        .then((num) => {
            const squared = num * num; // 2 * 2 = 4
            console.log(`  [Bài 8] Bước 1 (Bình phương): ${squared}`);
            return squared;
        })
        .then((squared) => {
            const doubled = squared * 2; // 4 * 2 = 8
            console.log(`  [Bài 8] Bước 2 (Nhân đôi): ${doubled}`);
            return doubled;
        })
        .then((doubled) => {
            const finalResult = doubled + 5; // 8 + 5 = 13
            console.log(`  [Bài 8] Bước 3 (Cộng 5): ${finalResult}`);
            return finalResult;
        });
    }
    
    // Chạy thử nghiệm:
    // ex8_promiseChain();

    // Câu 9:
    export function ex9_filterEvenNumbers(numbers: number[]): Promise<number[]> {
        return new Promise<number[]>((resolve) => {
        setTimeout(() => {
            const evens = numbers.filter((n) => n % 2 === 0);
            resolve(evens);
        }, 1000);
        });
    }
    
    // Chạy thử nghiệm:
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // ex9_filterEvenNumbers(arr).then((evens) => {
    //     console.log(`[Bài 9] Mảng số chẵn sau 1s: [${evens.join(", ")}]`);
    // });

    // Câu 10:
    export function ex10_promiseWithFinally(shouldFail: boolean = false): Promise<void> {
        const promise = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (!shouldFail) {
            resolve("Thực thi thành công");
            } else {
            reject(new Error("Có lỗi xảy ra"));
            }
        }, 500);
        });
    
        return promise
        .then((msg) => {
            console.log(`[Bài 10] Thành công: ${msg}`);
        })
        .catch((err: Error) => {
            console.log(`[Bài 10] Bắt lỗi: ${err.message}`);
        })
        .finally(() => {
            console.log("[Bài 10] Done");
        });
    }
    
    // // Chạy thử nghiệm:
    // ex10_promiseWithFinally();