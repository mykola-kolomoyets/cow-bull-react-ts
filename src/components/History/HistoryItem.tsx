import React, { FC } from 'react';
import { historyItemType } from 'types';

import styles from './History.module.scss';

const HistoryItem: FC<historyItemType> = (props: historyItemType) => {
	const {number, data} = props;
	return (
		<li key={`${number}-${data.cows}-${data.bulls}`}
				className={styles.item}>
	 		<strong className={styles.number}>{number}</strong>
			 <div className={styles.data}>
					<p>🐄: {data.cows} &nbsp;</p>
					<p>🐂: {data.bulls}</p>
			 </div>
	 	</li>
	)
}

export default HistoryItem;