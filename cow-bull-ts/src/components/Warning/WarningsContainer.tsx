// === default
import React, { FC, useContext } from 'react';
import { WarningContext } from 'context';
import { warningTypes } from "utils";

const WarningsContainer: FC<{}> = () => {

	const {warning, hide} = useContext(WarningContext);
	const {type, text} = warning;
	if (!warning.visible) {
		return null;
	}

	return (
		<div 
		className={`bg-${type}-100 border-l-4 border-${type}-500 text-${type}-700 p-4 relative rounded`}
		role="alert">
			<p className="font-bold">WARNING!!</p>&nbsp;
			{text}
			<button 
			onClick={hide} 
			className="close" 
			aria-label="Close">
				<span 
					aria-hidden="true"
					className="absolute top-3 bottom-0 right-0 px-4 py-3"
				>
					<svg className={`fill-current h-6 w-6 text-${type}-500`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
				</span>
			</button>
		</div>
	);
};

export default WarningsContainer;
