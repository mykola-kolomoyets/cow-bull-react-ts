import React, {FC} from 'react';

export interface IMovesProps {
	moves: number
};

const Moves: FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div>
			<h3>Your moves: {moves}</h3>
		</div>
	);
};

export default Moves;