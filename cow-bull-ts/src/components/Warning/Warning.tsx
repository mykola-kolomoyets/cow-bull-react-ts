import React, { FC } from 'react';
import { IWarningProps } from 'types/types';

const Warning: FC<IWarningProps> = (props: IWarningProps) => {
	return (
		<>
			<p>{props.text}</p>
		</>
	);
};

export default Warning;