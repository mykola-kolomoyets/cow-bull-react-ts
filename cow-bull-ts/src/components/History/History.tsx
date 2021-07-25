import React from 'react'
import { historyItemType } from 'types';
import HistoryItem from './HistoryItem';
import { useAppSelector } from 'store/hooks';

const History = () => {
	const {
		history
	} = useAppSelector(state => state.game); 

	const historyElements = history.map(({number, data}: historyItemType) => {
		return <HistoryItem number={number} data={data}/>
	})
	
	
	return (
		<section>
			<ul>
				{historyElements}
			</ul>
		</section>
	);
};

export default History;