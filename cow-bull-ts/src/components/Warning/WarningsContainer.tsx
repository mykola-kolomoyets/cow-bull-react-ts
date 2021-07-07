// === default
import React, { FC } from 'react';

// === components
import Warning from './Warning';

interface IWarningsContainerProps {
	warnings: string[]
};

const WarningsContainer: FC<IWarningsContainerProps> = (props: IWarningsContainerProps) => {
	let key = 0;
	let result: JSX.Element[] | null = null;

	if (props.warnings === []) return null;

	result = props.warnings.map(text => <Warning text={text} key={key++} />);

	return (
		<div className="warnings-container">
			{result}
		</div>
	);
};

export default WarningsContainer;