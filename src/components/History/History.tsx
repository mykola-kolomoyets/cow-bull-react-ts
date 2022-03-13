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
	
	return (
		<section className={styles.history}>
			<h2 className={styles.title}>History</h2>
			
			<ul className={styles.historyList}>
				{historyElements.length ? 
					historyElements : 
					<span>You have nor entered the number</span> 
				}
			</ul>
		</section>
	);
};

export default History;