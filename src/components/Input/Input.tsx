import React, { FC, useState, useContext} from "react";
import { WarningContext } from "context";
import {
  compareNumbers,
  StartNewGame,
  getCowsBulls,
  warningTypes,
} from "utils";
// import { useSelector, useDispatch } from 'react-redux';
import {
  incrementMoves,
  setEnteredNumber,
  setGameData,
  addToHistory,
} from "store/game/gameSlice";

import RestartGame from 'components/RestartGame';

import { historyItemType } from "types";

import { useAppDispatch, useAppSelector } from "store/hooks";

import styles from './Input.module.scss';

const Input: FC<{}> = () => {
  const [value, setValue] = useState("");
  const warning = useContext(WarningContext);
  const { currentNumber, enteredNumber } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setEnteredNumber(event.target.value));
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    if (value === "") return;
    event.preventDefault();
    warning.hide();
    dispatch(setEnteredNumber(event.currentTarget.nodeValue));
    setValue("");

    const criterions = compareNumbers(enteredNumber);
    console.log(criterions);

    if (criterions[0] && criterions[1]) {
      dispatch(incrementMoves());
      if (enteredNumber === currentNumber) {
        Promise.resolve()
          .then(() => warning.show("WOU WIN!!!", warningTypes.success))
          .then(() => {
            setTimeout(() => StartNewGame(), 2000);
          });
      } else {
        const gameData = getCowsBulls(currentNumber, enteredNumber);

        const currHistoryItem: historyItemType = {
          number: enteredNumber,
          data: gameData,
        };
        await dispatch(setGameData(gameData));
        await dispatch(addToHistory(currHistoryItem));
      }
    } else {
      let warnings = "";
      if (!criterions[0]) warnings += "non 4-digit number ";
      if (!criterions[0] && !criterions[1]) warnings += "and ";
      if (!criterions[1]) warnings += "number has repeated digits";
      warning.show(warnings, warningTypes.warning);
    }
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
