import { configureStore } from '@reduxjs/toolkit';
import themereducer from './features/themeslice';
import scrollreducer from './features/scrollslice';
import dialogreducer from './features/dialogslice'
import aboutrefreducer from './features/aboutrefslice';

export const store = configureStore({
  reducer: {
    theme: themereducer,
    scroll: scrollreducer,
    dialog: dialogreducer,
    aboutref: aboutrefreducer 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
