import React, { VFC } from 'react';

import { useAppSelector } from 'store/hooks';

import { HistoryItem } from 'types';

import HistoryItemComponent from './HistoryItem';

import styles from './History.module.scss';

const History: VFC = () => {
	const { history } = useAppSelector(state => state.game); 

	const historyElements = history.map(({number, data}: HistoryItem) => {
		return <HistoryItemComponent number={number} data={data}/>
	}).reverse();
	
	return historyElements?.length ?(
		<section className={styles.history}>
			<h2 className={styles.title}>History</h2>

			<table className={styles.historyTable}>
				<thead>
					<tr>
						<th>Number</th>
						<th>Cows 🐄 </th>
						<th>Bulls 🐂</th>
					</tr>
				</thead>

				<tbody>
					{ historyElements }
				</tbody>
			</table>

		</section>
	) : <span>You have not entered the number</span>  ;
};

export default History;