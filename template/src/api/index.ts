import axios from 'axios';
// import {getTokenByStore} from 'store/userSlice';

export const defaultConfigAxios = {
  timeout: 30000,
};

export const createAxios = (config: any, isPrivate: boolean) => {
  const axiosInstance = axios.create({
    ...defaultConfigAxios,
    ...config,
  });

  axiosInstance.interceptors.request.use(req => {
    if (isPrivate) {
      const token = '';
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const responseError = {
        ...error,
        ...error.response,
      };
      return Promise.reject(responseError);
    },
  );

  return axiosInstance;
};

const Api = createAxios(
  {
    baseURL: 'http://128.199.133.250:3000',
  },
  true,
);

export default Api;

export const Endpoint = {};
