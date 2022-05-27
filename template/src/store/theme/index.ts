import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppearanceMode} from 'designs/Colors';

export interface ThemeState {
  mode: 'light' | 'dark' | undefined;
}

const initialState: ThemeState = {
  mode: 'light',
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
