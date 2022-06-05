import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {showModalGlobal} from 'components/ModalGlobal';
import reactotron from 'reactotron-react-native';
import {captureException} from 'services/sentry';

export const handleError = (error: AxiosError) => {
  showModalGlobal({
    visible: true,
    rowButton: true,
    arrayButton: [
      {
        label: 'OK',
        onPress: () => {},
      },
    ],
    description: 'Lỗi api',
  });
  captureException(error);
  // if (error.response) {
  //   // The request was made and the server responded with a status code
  //   // that falls out of the range of 2xx
  //   reactotron.log?.('error.response', error.response);
  //   captureException(error);
  // } else if (error.request) {
  //   // The request was made but no response was received
  //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //   // http.ClientRequest in node.js
  //   reactotron.log?.('error.request', error.request);
  //   captureException(error);
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   reactotron.log?.('error.message', error.message);
  // }
  // reactotron.log?.('error.config', error.config);
};

export const defaultConfigAxios = {
  timeout: 4000,
};

export const createAxios = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    ...defaultConfigAxios,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      //log error to server
      handleError(error);
      // return error;
      return Promise.reject(error);
    },
    {synchronous: true},
  );

  return axiosInstance;
};
