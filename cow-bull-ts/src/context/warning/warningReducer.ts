
import { SHOW_ALERT, HIDE_ALERT } from './../types';

const handlers = {
	[SHOW_ALERT]: (state: any, { payload }: any) => ({ ...payload, visible: true }),
	[HIDE_ALERT]: (state: any) => ({ ...state, visible: false }),
	DEFAULT: (state: any) => state
}

type actionType = {
	type: keyof typeof handlers,
	payload?: {
		text: string,
		type: string
	}
}

export const warningReducer = (state: any, action: actionType) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
}