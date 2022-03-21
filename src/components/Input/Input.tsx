import React, { VFC } from 'react';
import { batch } from 'react-redux';

import {
  compareNumbers,
  StartNewGame,
  getCowsBulls,
  warningTypes
} from 'utils';

import {
  incrementMoves,
  setEnteredNumber,
  setGameData,
  addToHistory
} from 'store/game/slice';
import { show as showWarning, hide as hideWarning } from 'store/warning/slice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { HistoryItem } from 'types';

import RestartGame from 'components/RestartGame';

import styles from './Input.module.scss';

const Input: VFC = () => {
  const { currentNumber, enteredNumber } = useAppSelector(state => state.game);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnteredNumber(event.target.value));
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (!enteredNumber) {
      return dispatch(
        showWarning({ text: 'Enter the number!', type: warningTypes.danger })
      );
    }

    batch(() => {
      dispatch(hideWarning());
      dispatch(setEnteredNumber(event.currentTarget.nodeValue));
    });

    const criterions = compareNumbers(enteredNumber);

    if (criterions.is4Digit && criterions.hasUniqueDigits) {
      dispatch(incrementMoves());

      if (enteredNumber === currentNumber) {
        Promise.resolve()
          .then(() =>
            dispatch(
              showWarning({ text: 'WOU WIN!!!', type: warningTypes.success })
            )
          )
          .then(() => {
            setTimeout(() => StartNewGame(), 2000);
          });

        return;
      }

      const gameData = getCowsBulls(currentNumber, enteredNumber);

      const currHistoryItem: HistoryItem = {
        number: enteredNumber,
        data: gameData
      };

      await batch(() => {
        dispatch(setGameData(gameData));
        dispatch(addToHistory(currHistoryItem));
      });

      return;
    }

    let warnings = '';

    if (!criterions.is4Digit) warnings += 'non 4-digit number ';
    if (!criterions.is4Digit && !criterions.hasUniqueDigits) warnings += 'and ';
    if (!criterions.hasUniqueDigits) warnings += 'number has repeated digits';

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
          value={enteredNumber || ''}
          placeholder={'####'}
          maxLength={4}
        />

        <button className={styles.submit} type="submit">
          Check number
        </button>
      </form>
      <RestartGame />
    </section>
  );
};

export default Input;
