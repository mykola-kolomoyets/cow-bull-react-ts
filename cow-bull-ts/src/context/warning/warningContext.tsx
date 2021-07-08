import { createContext } from 'react';
import { IWarningContext } from '../../components/interfaces/interfaces';

const WarningContext = createContext({} as IWarningContext);

export default WarningContext;