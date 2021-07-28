import React, { useContext } from "react";
import { generateNumber, warningTypes } from "utils";
import {
  annulateState,
  setCurrentNumber,
  setIncorrectNumbers,
} from "store/game/gameSlice";

import { WarningContext } from "context";

import { useAppDispatch } from "store/hooks";

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
      className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-900 text-lg py-1 px-3 rounded"
      onClick={handleClick}
    >
      RestartGame
    </button>
  );
};

export default RestartGame;
