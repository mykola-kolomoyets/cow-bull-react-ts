// === default
import React, { FC, useContext } from 'react';
import { WarningContext } from 'context';
import './Warning.styles.scss'

const WarningsContainer: FC<{}> = () => {

	const {warning, hide} = useContext(WarningContext);
	const {type, text} = warning;
	if (!warning.visible) {
		return null;
	}

	return (
		<div
		className={`alert alert-${type}`}
		role="alert">
			<p><b>WARNING!!!</b></p>&nbsp;
			{text}
			<button 
			onClick={hide} 
			className="close" 
			aria-label="Close">
				<span 
					aria-hidden="true"
				>
					<svg role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
				</span>
			</button>
		</div>
	);
};

export default WarningsContainer;
