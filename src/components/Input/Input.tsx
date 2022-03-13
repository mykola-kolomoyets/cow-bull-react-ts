import React, { useState, VFC } from "react";

import {
  compareNumbers,
  StartNewGame,
  getCowsBulls,
  warningTypes,
} from "utils";

import {
  incrementMoves,
  setEnteredNumber,
  setGameData,
  addToHistory,
} from "store/game/slice";

import { 
  show as showWarning, 
  hide as hideWarning 
} from "store/warning/slice";

import RestartGame from 'components/RestartGame';

import { HistoryItem } from "types";

import { useAppDispatch, useAppSelector } from "store/hooks";

import styles from './Input.module.scss';
import { batch } from "react-redux";

const Input: VFC = () => {
  const [value, setValue] = useState("");
  const { currentNumber, enteredNumber } = useAppSelector(
    (state) => state.game
  );

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setEnteredNumber(event.target.value));
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    if (!value) return dispatch(showWarning({ text: "Enter the number!", type: warningTypes.danger }));;

    event.preventDefault();

    batch(() => {
      dispatch(hideWarning());
      dispatch(setEnteredNumber(event.currentTarget.nodeValue));
    });

    setValue("");

    const criterions = compareNumbers(enteredNumber);

    if (criterions[0] && criterions[1]) {
      dispatch(incrementMoves());

      if (enteredNumber === currentNumber) {
        Promise.resolve()
          .then(() => dispatch(showWarning({ text: "WOU WIN!!!", type: warningTypes.success })))
          .then(() => {
            setTimeout(() => StartNewGame(), 2000);
          });

        return;
      }

      const gameData = getCowsBulls(currentNumber, enteredNumber);

      const currHistoryItem: HistoryItem = {
        number: enteredNumber,
        data: gameData,
      };

      await batch(() => {
        dispatch(setGameData(gameData));
        dispatch(addToHistory(currHistoryItem));
      });

      return;
    } 

    let warnings = "";

    if (!criterions[0]) warnings += "non 4-digit number ";
    if (!criterions[0] && !criterions[1]) warnings += "and ";
    if (!criterions[1]) warnings += "number has repeated digits";

    dispatch(showWarning({ text: warnings, type: warningTypes.warning }));
  };

  return (
    <section className={styles.container}>
      <form
        className={styles.form}
        action="#"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className={styles.input}
          type="text"
          onChange={(event) => handleChange(event)}
          value={value}
          placeholder={"####"}
          maxLength={4}
        />

        <button
          className={styles.submit}
          type="submit"
        >
          Check number
        </button>

        <RestartGame/>
      </form>
    </section>
  );
};

export default Input;
