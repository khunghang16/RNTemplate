import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppearanceMode} from 'designs/Colors';
import {storageLocalData} from 'store/localData';

export interface ThemeState {
  mode: 'light' | 'dark' | undefined;
}

const initialState: ThemeState = {
  mode: storageLocalData.getString('theme') as 'light' | 'dark' | undefined,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<AppearanceMode>) => {
      state.mode = action.payload;
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
