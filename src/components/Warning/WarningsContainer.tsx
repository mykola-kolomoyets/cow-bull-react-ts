import React, { VFC } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { hide } from 'store/warning/slice';

import './Warning.styles.scss';

const WarningsContainer: VFC = () => {
  const { text, type, isShown } = useAppSelector(state => state.warning);

  const dispatch = useAppDispatch();

  const onHide = () => dispatch(hide());

  return isShown ? (
    <div
      className={`alert alert-${type}`}
      role="alert">
      <p><b>WARNING!!!</b></p>&nbsp;

      {text}

      <button
        className="close"
        onClick={onHide}
        aria-label="Close">
        <span aria-hidden="true">
          <svg role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </button>
    </div>
  ) : null;
};

export default WarningsContainer;
