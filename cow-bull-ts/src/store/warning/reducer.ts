import { SHOW_ALERT, HIDE_ALERT } from 'utils';
import {
     ActionType, 
     handleType
    } from "types/types";

const handlers: handleType = {
    [SHOW_ALERT]: (state: any, { payload }: any) => ({ ...payload, visible: true }),
    [HIDE_ALERT]: (state: any) => ({ ...state, visible: false }),
    DEFAULT: (state: any) => state
}

const warningReducer = (state: any, action: ActionType) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}

export default warningReducer;