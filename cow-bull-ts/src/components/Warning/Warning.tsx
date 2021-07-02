import React, { FC } from 'react';

interface IWarningProps {
	text: string
}


const Warning: FC<IWarningProps> = (props) => {
	return (
		<>
			<p>{props.text}</p>
		</>
	)

}

export default Warning;