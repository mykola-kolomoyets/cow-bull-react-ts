export type Dispatch = {
	text: string;
	type: string;
}

export type GameData = {
	cows: number;
	bulls: number;
}


export type Action = {
	type: string;
	payload?: HistoryItem | number | number[] | CowBullsProps | Dispatch | WarningPayload;
}

export type GameState = {
	moves: number;
	currentNumber: number;
	enteredNumber: number;
	gameData: GameData;
	incorrectNumbers: number[];
	hints: number[];
	history: HistoryItem[];
};

export type HistoryItem = {
	number: number;
	data: GameData;
}

export type GenerateNumberReturn = {
	number: number;
	incorrectNumbers: number[];
}

export type Handler = {
	[key: string]: (
			state: any,
			{payload}?: any
	) => any 
}

export type Reducer = (
	state: any,
	action: Action
) => Handler

export type AppState = {
	moves: number;
	currentNumber: number;
	enteredNumber: number;
	gameData: {
			cows: number;
			bulls: number;
	}
	incorrectNumbers: number[];
	history: HistoryItem[];
}

export type HistoryProps = {
	history: HistoryItem[];
}

export type WarningStateProps = {
	children: any;
}

export enum WarningType {
	warning = 'warning',
	error = 'error',
	success = 'success',
}

export type WarningState = {
	text: string;
	isShown: boolean;
	type: WarningType;
}

export type WarningPayload = {
	text?: string;
	type?: WarningType;
}

export type CowBullsProps = {
	cows: number;
	bulls: number;
}

export type MovesProps = {
	moves: number;
}

export type NumInputProps = {
	parentCallBack: (childData: number) => void;
	number: number;
}

export type WarningProps = {
	text: string;
}