import React, {FC} from 'react';
import { IMovesProps } from 'types';


const Moves: FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div className="w-full px-2 py-2 text-xl mb-3">
			<h3 className="flex-items-center text-center">Your moves: <span className="text-2xl">{moves}</span>	</h3>
		</div>
	);
};

export default Moves;