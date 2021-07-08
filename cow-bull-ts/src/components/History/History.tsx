import React, {FC} from 'react'
import {historyItem} from './../../context/types';

interface IHistoryProps {
	history: historyItem[]
}

const History: FC<IHistoryProps> = (props: IHistoryProps) => {
	
	const historyEls = props.history.map(({number, data}) => (
		<li key={number}>
			<strong>{number}&nbsp;</strong>
			<em>cows: {data.cows}</em>
			<em>bulls: {data.bulls}</em>
		</li>
	));
	
	return (
		<section>
			<ul>
				{historyEls}
			</ul>
			
		</section>
	);
};

export default History;