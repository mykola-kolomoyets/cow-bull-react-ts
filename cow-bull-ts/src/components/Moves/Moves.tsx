import * as React from 'react';

export interface IMovesProps {
	moves: number
}

const Moves: React.FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div>
			<p>Your moves: {moves}</p>
		</div>
	);
}

export default Moves;