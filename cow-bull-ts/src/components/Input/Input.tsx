import React, { FC, useState, useContext, useRef } from 'react';
import {WarningContext} from 'context';
import { 
  compareNumbers,
  StartNewGame,
  getCowsBulls
} from 'utils';
// import { useSelector, useDispatch } from 'react-redux';
import {
  incrementMoves,
  setEnteredNumber,
  setGameData,
  addToHistory
} from 'store/game/gameSlice';

import { historyItemType } from 'types';

import { 
  useAppDispatch,
  useAppSelector
} from 'store/hooks';

const Input: FC<{}> = () => {
  const [value, setValue] = useState("");
  const warning = useContext(WarningContext);
  const {
    currentNumber,
    enteredNumber
  } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setEnteredNumber(event.target.value));
  }

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    warning.hide();
    dispatch(setEnteredNumber(event.currentTarget.nodeValue));

    const criterions = compareNumbers(enteredNumber);
    console.log(criterions);
    
    
    if (criterions[0] && criterions[1]) {
      dispatch(incrementMoves());
      if (enteredNumber === currentNumber) {
        Promise.resolve()
          .then(() => warning.show("WOU WIN!!!", "success"))
          .then(() => {
            setTimeout(() => StartNewGame(), 2000);
          });
      } else {
        const gameData = getCowsBulls(currentNumber, enteredNumber);

        const currHistoryItem: historyItemType = {
          number: enteredNumber,
          data: gameData
        }
        await dispatch(setGameData(gameData));
        await dispatch(addToHistory(currHistoryItem));
      }
    } else {
      console.log("LOX");
    }
  }

  return (
    <section className="input">
      <form
        action="#"
        onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          onChange={(event) => handleChange(event)}
          value={value}
          maxLength={4}
        />
        <button type="submit">CheckNumber</button>
      </form>
    </section>
  )
}

export default Input;