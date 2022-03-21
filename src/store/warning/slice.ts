import { createSlice } from '@reduxjs/toolkit';

import { WarningPayload } from 'types';

import warningInitialState from './state';

const warningSlice = createSlice({
  name: 'warning',
  initialState: warningInitialState,
  reducers: {
    show: (state, action) => {
      const { text, type } = (action.payload as WarningPayload);

      state.isShown = true;
      state.text = text!;
      state.type = type!;
    },
    hide: (state) => {
      state.isShown = false;
      state.text = '';
    }
  }
});

export const {
  show,
  hide
} = warningSlice.actions;


export default warningSlice.reducer;