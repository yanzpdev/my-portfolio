import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
  name: string;
}

const initialState: DialogState = {
  name: '',
};

const dialogslice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialog(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setDialog } = dialogslice.actions;
export default dialogslice.reducer;
