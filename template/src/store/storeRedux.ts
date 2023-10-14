import {combineReducers, createStore} from '@reduxjs/toolkit';
import theme from './theme';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import {MMKVLoader} from 'react-native-mmkv-storage';
const reduxStorage = new MMKVLoader().initialize();

const versionMigrations = 1;

const migrations = {
  0: (state: any) => {
    // migration clear out device state
    return {
      ...state,
    };
  },
  [versionMigrations]: (state: any) => {
    // migration to keep only device state
    return {
      ...state,
    };
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme'],
  version: versionMigrations,
  migrate: createMigrate(migrations),
};

const rootReducer = combineReducers({
  theme,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeRedux = createStore(persistedReducer);
export const persistor = persistStore(storeRedux);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeRedux.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeRedux.dispatch;
