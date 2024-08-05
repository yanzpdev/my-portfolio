import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RefState {
  isVisible: boolean;
}

const initialState: RefState = {
  isVisible: false,
};

const aboutrefstate = createSlice({
  name: 'aboutref',
  initialState,
  reducers: {
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = aboutrefstate.actions;
export default aboutrefstate.reducer;
