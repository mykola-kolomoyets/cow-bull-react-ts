export type dispatchType = {
	text: string;
	type: string;
}

export type gameDataType = {
	cows: number,
	bulls: number
}


export type ActionType = {
	type: string,
	payload?: historyItemType | number | number[] | ICowBullsProps | dispatchType
}

export type gameStateType = {
	moves: number,
	currentNumber: number,
	enteredNumber: number,
	gameData: gameDataType,
	incorrectNumbers: number[],
	hints: number[],
	history: historyItemType[]
};

export type historyItemType = {
	number: number,
	data: gameDataType
}

export type generateNumberReturnType = {
	number: number,
	incorrectNumbers: number[]
}

export type handleType = {
	[key: string]: (
			state: any,
			{payload}?: any
	) => any 
}

export type ReducerType = (
	state: any,
	action: ActionType
) => handleType

export interface IAppState {
	moves: number
	currentNumber: number
	enteredNumber: number
	gameData: {
			cows: number
			bulls: number
	}
	incorrectNumbers: number[],
	history: historyItemType[]
}

export interface IHistoryProps {
	history: historyItemType[]
}

export interface IWarningStateProps {
	children: any;
}

export interface IWarningContext {
	show: (text: string, type?: string | undefined, payload?: dispatchType) => void,
	hide: () => void,
	warning: any
}

export interface ICowBullsProps {
	cows: number,
	bulls: number
}

export interface IMovesProps {
	moves: number
}

export interface INumInputProps {
	parentCallBack: (childData: number) => void;
	number: number
}

export interface IWarningProps {
	text: string
}