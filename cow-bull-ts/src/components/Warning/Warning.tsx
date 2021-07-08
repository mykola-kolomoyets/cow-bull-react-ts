import React, { FC } from 'react';
import { IWarningProps } from '../interfaces/interfaces';

const Warning: FC<IWarningProps> = (props: IWarningProps) => {
	return (
		<>
			<p>{props.text}</p>
		</>
	);
};

export default Warning;