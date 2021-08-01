import React, {FC} from 'react';
import { IMovesProps } from 'types';
import styles from './Moves.module.scss';


const Moves: FC<IMovesProps> = (props: IMovesProps) => {
	const {moves} = props;
	return (
		<div className={styles.moves}>
			<h3 className={styles.movesTitle}>Your moves: <span className={styles.movesText}>{moves}</span></h3>
		</div>
	);
};

export default Moves;