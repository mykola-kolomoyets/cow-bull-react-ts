import { createContext } from 'react';
import { dispatchType } from './WarningState';

export interface IWarningContext {
	show: (text: string, type?: string | undefined, payload?: dispatchType) => void,
	hide: () => void,
	warning: any
}

const WarningContext = createContext({} as IWarningContext);

export default WarningContext;