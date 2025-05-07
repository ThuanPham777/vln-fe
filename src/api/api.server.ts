// for public client page
import { baseApiURL } from '@/utils/consts/baseUrl';
import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import qs from 'qs';

// === Types ===
export type ApiBase<T = unknown> = AxiosResponse<T> | AxiosError<T>;

export function isAxiosResponse<T = any>(args: any): args is AxiosResponse<T> {
  return args?.data !== undefined;
}

export function isAxiosError<T = any>(args: any): args is AxiosError<T> {
  return args?.isAxiosError === true;
}

// === Axios Instance ===
const apiServer: AxiosInstance = Axios.create({
  baseURL: baseApiURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  paramsSerializer: (params) => {
    // Sử dụng qs.stringify để tuần tự hóa params
    // arrayFormat: 'repeat' sẽ tạo ra query dạng: types=type1&types=type2
    // Đây thường là định dạng mà NestJS/Express xử lý tốt mặc định cho string[]
    return qs.stringify(params, { arrayFormat: 'repeat' });

    // Các tùy chọn khác cho arrayFormat:
    // 'indices':  types[0]=type1&types[1]=type2
    // 'brackets': types[]=type1&types[]=type2 (thường dùng với PHP)
    // 'comma':    types=type1,type2 (ít phổ biến hơn, cần xử lý đặc biệt ở backend)
  },
});

// === Request Interceptor (cleaned) ===
apiServer.interceptors.request.use(
  (config) => {
    // No access token logic
    return config;
  },
  (error) => Promise.reject(error)
);

// === Response Interceptor ===
apiServer.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      return response;
    }

    return {
      ...response,
      data: response.data?.data,
      status: response.status,
      message: response.data?.message,
    };
  },
  async (error) => {
    const errorResponse = {
      data: error.response?.data,
      message: error.response?.data?.message,
      status: error.response?.status,
    };

    return Promise.reject({
      ...error,
      response: errorResponse,
    });
  }
);

export default apiServer;
