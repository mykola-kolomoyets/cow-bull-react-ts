import React, { FC } from 'react';
import { historyItemType } from 'types';

const HistoryItem: FC<historyItemType> = (props: historyItemType) => {
	const {number, data} = props;
	return (
		<li key={`${number}-${data.cows}-${data.bulls}`}>
	 		<strong>{number}&nbsp;</strong>
	 		<em>cows: {data.cows} </em>
	 		<em>bulls: {data.bulls}</em>
	 	</li>
	)
}

export default HistoryItem;