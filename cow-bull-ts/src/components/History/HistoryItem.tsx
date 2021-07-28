import React, { FC } from 'react';
import { historyItemType } from 'types';

const HistoryItem: FC<historyItemType> = (props: historyItemType) => {
	const {number, data} = props;
	return (
		<li key={`${number}-${data.cows}-${data.bulls}`}
				className="flex-column px-2 py-1 mt-2 border-l-2 border-blue-300">
	 		<strong>{number}</strong>
			 <div className="flex">
					<p>cows: {data.cows} &nbsp;</p>
					<p>bulls: {data.bulls}</p>
			 </div>
	 		
	 	</li>
	)
}

export default HistoryItem;