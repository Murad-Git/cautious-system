import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import jobsSlice from '@/store/jobsSlice';

export const store = configureStore({
  reducer: jobsSlice,
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
