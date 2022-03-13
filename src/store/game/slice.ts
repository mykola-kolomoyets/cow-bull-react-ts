import { createSlice } from "@reduxjs/toolkit";
import gameInitialState from "./state";

const gameSlice = createSlice({
	name: "game",
	initialState: gameInitialState,
	reducers: {
		incrementMoves: state => {
			state.moves += 1;
		},
		setEnteredNumber: (state, action) => {
			state.enteredNumber = +action.payload;
		},
		setGameData: (state, action) => {
			state.gameData = action.payload;
		},
		setIncorrectNumbers: (state, action) => {
			state.incorrectNumbers = action.payload;
		},
		setCurrentNumber: (state, action) => {
			state.currentNumber = action.payload;
		},
		addToHistory: (state, action) => {
			state.history.push(action.payload);
		},
		clearHistory: state => {
			state.history = [];
		},
		setHints: (state, action) => {
			state.hints = action.payload;
		},
		clearHints: state => {
			state.hints = [];
		},
		annulateState: state => {
			state.moves = 0;
			state.currentNumber = 0;
			state.enteredNumber = 0;
			state.gameData = {
				cows: 0,
				bulls: 0
			};
			state.hints = [];
			state.history = [];
			state.incorrectNumbers = [];
		}
	}
});

export const {
	incrementMoves,
	addToHistory,
	clearHints,
	clearHistory,
	setGameData,
	setHints,
	setIncorrectNumbers,
	setEnteredNumber,
	annulateState,
	setCurrentNumber
} = gameSlice.actions;

export default gameSlice.reducer;