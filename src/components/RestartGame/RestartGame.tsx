import React, { useContext } from "react";
import { generateNumber, warningTypes } from "utils";
import {
  annulateState,
  setCurrentNumber,
  setIncorrectNumbers,
} from "store/game/gameSlice";

import { WarningContext } from "context";

import { useAppDispatch } from "store/hooks";

import styles from './RestartGame.module.scss';

const RestartGame = () => {
  const warning = useContext(WarningContext);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(annulateState());
    const { number, incorrectNumbers } = generateNumber();
    dispatch(setCurrentNumber(number));
    dispatch(setIncorrectNumbers(incorrectNumbers));
    warning.show("New game started", warningTypes.success);
  };
  return (
    <button
      className={styles.restart}
      onClick={handleClick}
    >
      Restart game
    </button>
  );
};

export default RestartGame;
