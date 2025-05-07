export function parseErrorMessage(error: ApiError) {
  return {
    title: error.title || "Đã xảy ra lỗi",
    description: error.description || error.message || "Vui lòng kiểm tra lại thông tin đăng nhập.",
  };
}

export interface ApiError {
  status: number;
  code: string;
  message: string;
  title?: string;
  description?: string;
  cause?: Array<{
    property: string;
    message: string;
  }>;
  full?: any;
}
