export class Logger {
  private static instance: Logger;

  // Constructor để private để ngăn không cho dùng lệnh new Logger() từ bên ngoài
  private constructor() {}

  // Phương thức tĩnh để lấy thể hiện duy nhất của class
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[LOG - ${timestamp}]: ${message}`);
  }
}