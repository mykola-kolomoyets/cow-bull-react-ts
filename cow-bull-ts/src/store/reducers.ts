import { ActionType , GameStateType, historyItem } from "types/types";
import {
	ADD_MOVE,
	ANNULATE_MOVES,
	SET_GAME_DATA,
	ADD_HISTORY,
	ANNULATE_HISTORY,
	SET_START_NUMBER,
	SET_ENTERED_NUMBER,
	SET_INCORRECT_NUMBER
} from "utils";

const rootReducer = (
	state: GameStateType = {
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
	}, 
	action: ActionType
	) => {
	switch (action.type) {
		case ADD_MOVE: {
			return {
				...state, 
				moves: state.moves + 1};
		}
		case SET_GAME_DATA: {
			return {
				...state,
				gameData: action.payload
			}
		}
		case ADD_HISTORY: {
			const historyNumbers: number[] = (state.history as historyItem[]).map(el => el.number);
			if (state.history !== [] && !historyNumbers.includes((action?.payload as historyItem)?.number)) {
				return {
					...state,
					history: [
						...state.history,
						action.payload
					]
				}
			}
			return state;
		}
		case SET_START_NUMBER: {
			return {
				...state,
				currentNumber: action.payload
			}
		}
		case SET_ENTERED_NUMBER: {
			return {
				...state,
				enteredNumber: action.payload
			}
		}
		case SET_INCORRECT_NUMBER: {
			return {
				...state,
				incorrectNumbers: action.payload
			}
		}
		case ANNULATE_MOVES: {
			return {
				...state,
				moves: 0
			}
		}
		case ANNULATE_HISTORY: {
			return {
				...state,
				history: []
			}
		}
	}
}

export default rootReducer;