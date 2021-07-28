import { gameStateType } from 'types';

const GameState: gameStateType = {
	moves: 0,
	currentNumber: 0,
	enteredNumber: 0,
	gameData: {
		cows: 0,
		bulls: 0
	},
	incorrectNumbers: [],
	history: [],
	hints: [],
}

export { GameState };