import { GameState } from 'types';

const gameInitialState: GameState = {
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
};

export default gameInitialState;
