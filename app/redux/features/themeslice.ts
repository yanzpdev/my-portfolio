import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  dark: boolean;
}

let theme = null;
if (typeof window !== 'undefined') {
  theme = localStorage.getItem('dark');
}

const parsedTheme = theme ? JSON.parse(theme) : false;

const initialState: ThemeState = {
  dark: parsedTheme,
};

const themeslice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.dark = action.payload;
      localStorage.setItem('dark', JSON.stringify(action.payload));
    },
  },
});

export const { setDarkMode } = themeslice.actions;
export default themeslice.reducer;
