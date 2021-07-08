import React, { FC, useReducer } from 'react';
import WarningContext from './warningContext';
import { warningReducer } from './warningReducer';
import { SHOW_ALERT, HIDE_ALERT } from './../alertTypes';
import { IWarningStateProps } from '../../components/interfaces/interfaces';

import { dispatchType } from '../../components/types/types';

const WarningState: FC<IWarningStateProps> = (props: IWarningStateProps) => {
	const [state, dispatch] = useReducer(warningReducer, { visible: false });

	const show = (text: string, type='warning', payload?: dispatchType): void => {
		dispatch({
			type: SHOW_ALERT,
			payload: { text, type },
		});
	};

	const hide = (): void => dispatch({ type: HIDE_ALERT });

	return (
		//^ soon will be refactored for complex Warning provider to show warnings
		<WarningContext.Provider
			value={{
				show, hide,
				warning: state,
			}}
		>
			{props.children}
		</WarningContext.Provider>
	);
};

export default WarningState;