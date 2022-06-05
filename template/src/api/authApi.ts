import {createAxios} from './common';

export const AuthApi = createAxios({
  baseURL: 'https://reactnative.dev',
  headers: {'X-Custom-Header': 'foobar'},
});

export const getMovie = AuthApi.get('/movies.json');
