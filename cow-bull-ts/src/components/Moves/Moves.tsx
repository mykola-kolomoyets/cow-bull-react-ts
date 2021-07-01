import React, {FC} from 'react';

export interface IMovesProps {
	moves: number
}

const Moves: FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div>
			<p>Your moves: {moves}</p>
		</div>
	);
}

export default Moves;