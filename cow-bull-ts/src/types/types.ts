export type historyItem = {
    number: number,
    data: {
        cows: number,
        bulls: number
    }
}

export type dispatchType = {
    payload?: {
        text: string;
        type: string;
    };
}

export interface IAppState {
    moves: number
    currentNumber: number
    enteredNumber: number
    gameData: {
        cows: number
        bulls: number
    }
    incorrectNumbers: number[],
    history: historyItem[]
}

export interface IHistoryProps {
    history: historyItem[]
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