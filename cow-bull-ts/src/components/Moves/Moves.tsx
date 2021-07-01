import * as React from 'react';

export interface IMovesProps {
	moves: number
}

export default function Moves (props: IMovesProps) {
	const {moves} = props;
	return (
		<div>
			<p>Your moves: {moves}</p>
		</div>
	);
}
