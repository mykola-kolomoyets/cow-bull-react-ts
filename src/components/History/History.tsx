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
		<section className="mt-3 border border-blue-100 rounded px-3 py-3">
			<h2 className="text-2xl border-b border-blue-100 pb-3">History</h2>
			<ul className="">
				{historyElements.length ? historyElements : 
				<span className="text-sm">You have nor entered the number</span> }
			</ul>
		</section>
	);
};

export default History;