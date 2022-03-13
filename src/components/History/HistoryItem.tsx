import React, { FC } from 'react';
import { HistoryItem } from 'types';

import styles from './History.module.scss';

const HistoryItemComponent: FC<HistoryItem> = ({ number, data }) => {
	return (
		<li key={`${number}-${data.cows}-${data.bulls}`} className={styles.item}>
	 		<strong className={styles.number}>{number}</strong>

			 <div className={styles.data}>
				<p>🐄: {data.cows} &nbsp;</p>
				
				<p>🐂: {data.bulls}</p>
			 </div>
	 	</li>
	)
}

export default HistoryItemComponent;