// === default
import React, { FC, useContext } from 'react';
import { WarningContext } from 'context';

const WarningsContainer: FC<{}> = () => {

	const {warning, hide} = useContext(WarningContext);
	if (!warning.visible) {
		return null;
	}

	return (
		<div className={`alert alert-${warning.type || 'warning'} alert-dismissible`}>
			<strong>WARNING!!</strong>&nbsp;
			{warning.text}
			<button onClick={hide} className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		</div>
	);
};

export default WarningsContainer;