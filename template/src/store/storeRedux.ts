import {configureStore} from '@reduxjs/toolkit';
import theme from './theme';

export const storeRedux = configureStore({
  reducer: {
    theme,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeRedux.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeRedux.dispatch;
