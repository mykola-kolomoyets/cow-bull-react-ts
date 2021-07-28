import { gameStateType } from 'types';

const gameInitialState: gameStateType  = {
    moves: 0,
    currentNumber: 0,
    enteredNumber: 0,
    gameData: {
        cows: 0,
        bulls: 0
    },
    incorrectNumbers: [],
    hints: [],
    history: []
}

export default gameInitialState;