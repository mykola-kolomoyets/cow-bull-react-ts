import React, {FC} from 'react';
import { IMovesProps } from 'types';


const Moves: FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div>
			<h3>Your moves: {moves}</h3>
		</div>
	);
};

export default Moves;