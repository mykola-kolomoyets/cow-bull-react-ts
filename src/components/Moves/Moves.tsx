import React, { FC } from 'react';
import { MovesProps } from 'types';
import styles from './Moves.module.scss';


const Moves: FC<MovesProps> = ({ moves }) => (
	<div className={styles.moves}>
		<h3 className={styles.movesTitle}>
			Your moves: <span className={styles.movesText}>{moves}</span>
		</h3>
	</div>
);

export default Moves;