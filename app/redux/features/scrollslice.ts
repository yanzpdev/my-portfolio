import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  progress: number;
}

const initialState: ProgressState = {
  progress: 0,
};

const scrollslice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
  },
});

export const { setScrollProgress } = scrollslice.actions;
export default scrollslice.reducer;
