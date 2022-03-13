import React from "react";
import { batch } from "react-redux";
import { generateNumber, warningTypes } from "utils";
import {
  annulateState,
  setCurrentNumber,
  setIncorrectNumbers,
} from "store/game/slice";

import { show as showWarning } from "store/warning/slice";

import { useAppDispatch } from "store/hooks";

import styles from './RestartGame.module.scss';

const RestartGame = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    const { number, incorrectNumbers } = generateNumber();

    batch(() => {
      dispatch(annulateState());
      dispatch(setCurrentNumber(number));
      dispatch(setIncorrectNumbers(incorrectNumbers));
      dispatch(showWarning({ text: "New game started", type: warningTypes.success }));
    });
  };

  return (
    <button
      className={styles.restart}
      onClick={onClick}
    >
      Restart game
    </button>
  );
};

export default RestartGame;
