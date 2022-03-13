import React, { FC } from 'react';
import { HistoryItem } from 'types';

import styles from './History.module.scss';

const HistoryItemComponent: FC<HistoryItem> = ({ number, data }) => {
	return (
		<tr key={`${number}-${data.cows}-${data.bulls}`} className={styles.item}>
	 		<td className={styles.number}>{number}</td>

			 {/* <td className={styles.data}> */}
			 <td>
				<p>{data.cows} &nbsp;</p>

			 </td>
			 <td>
				<p>{data.bulls}</p>

			 </td>

			 {/* </td> */}
	 	</tr>
	)
}

export default HistoryItemComponent;