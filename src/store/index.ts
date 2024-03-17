import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices/types';
export * from './slices/catalogSlice';
export * from './thunks/types';
export * from './thunks/getCatalog';