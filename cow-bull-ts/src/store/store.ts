import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import gameReducer from 'store/game/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: [logger]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;