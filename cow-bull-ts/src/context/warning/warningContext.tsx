import { createContext } from 'react';
import { IWarningContext } from 'types';

const WarningContext = createContext({} as IWarningContext);

export default WarningContext;