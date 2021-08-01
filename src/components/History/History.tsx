import React from 'react'
import { historyItemType } from 'types';
import HistoryItem from './HistoryItem';
import { useAppSelector } from 'store/hooks';
import styles from './History.module.scss';

const History = () => {
	const {
		history
	} = useAppSelector(state => state.game); 

	const historyElements = history.map(({number, data}: historyItemType) => {
		return <HistoryItem number={number} data={data}/>
	}).reverse();
	
	
	return (
		<section className={styles.history}>
			<h2 className={styles.title}>History</h2>
			<ul className={styles.historyList}>
				{historyElements.length ? historyElements : 
				<span>You have nor entered the number</span> }
			</ul>
		</section>
	);
};

export default History;