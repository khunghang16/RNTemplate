import {configureStore} from '@reduxjs/toolkit';
import theme from './theme';
import Reactotron from '../../ReactotronConfig';

let enhancers = __DEV__
  ? Reactotron.createEnhancer
    ? [Reactotron.createEnhancer()]
    : []
  : [];

export const storeRedux = configureStore({
  reducer: {
    theme,
  },
  enhancers: enhancers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeRedux.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeRedux.dispatch;
