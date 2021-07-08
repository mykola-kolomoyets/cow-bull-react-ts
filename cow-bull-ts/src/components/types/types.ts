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
};