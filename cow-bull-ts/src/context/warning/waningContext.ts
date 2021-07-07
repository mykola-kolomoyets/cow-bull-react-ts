import {createContext} from 'react';

export interface IWarningContext {
	type: string,
	text: string
}

const WarningContext = createContext({} as IWarningContext);

export default WarningContext; 