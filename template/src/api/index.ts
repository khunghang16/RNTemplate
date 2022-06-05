import {AuthApi} from './authApi';

export const configAxios = (token: string) => {
  AuthApi.defaults.headers.common['Authorization'] = token;
};
