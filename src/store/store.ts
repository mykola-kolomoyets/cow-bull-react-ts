import { configureStore } from '@reduxjs/toolkit';
import gameReducer from 'store/game/slice';
import warningReducer from './warning/slice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    warning: warningReducer
  },
  middleware: []
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;