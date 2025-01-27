class AppError extends Error {
  data: unknown;
  type?: string;
  constructor(message: string, type?: string, data?: unknown) {
    super(message);
    this.data = data;
    this.type = type;
  }
}

export default AppError;
