import { configureStore } from '@reduxjs/toolkit';
import gameReducer from 'store/game/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: []
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;