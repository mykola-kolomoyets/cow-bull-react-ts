import React from 'react'
import { generateNumber } from 'utils';
import { 
    annulateState, 
    setCurrentNumber,
    setIncorrectNumbers
} from 'store/game/gameSlice';

import { useAppDispatch } from 'store/hooks';

const RestartGame = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(annulateState());
        const {number, incorrectNumbers} = generateNumber();
        dispatch(setCurrentNumber(number));
        dispatch(setIncorrectNumbers(incorrectNumbers));
    }
    return (
        <button onClick={handleClick}>RestartGame</button>
    )

}

export default RestartGame;